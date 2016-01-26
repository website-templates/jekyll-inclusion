module Jekyll

  class CategoryGenerator < Generator
    safe true

    def generate(site)
      if site.layouts.key? 'category'
        site.categories.keys.each do |category|
          paginate(site, category)
        end
      end
    end

    def paginate(site, category)
      category_posts = site.posts.docs.find_all {|post| post.to_liquid['categories'].include?(category)}.sort_by {|post| -post.date.to_f}
      num_pages = CategoryPager.calculate_pages(category_posts, site.config['paginate'].to_i)
      category_name = category.gsub(/\s+/, site.config['categories']['delimiter'])
      (1..num_pages).each do |page|
        pager = CategoryPager.new(site, page, category_posts, category_name, num_pages)
        dir = File.join(site.config['categories']['url'], category_name, page > 1 ? site.config['categories']['slug'] + "#{page}" : '')
	      base_path = site.config['categories']['url'] + "#{category_name}" + "/"
	      slug_path = site.config['categories']['slug']
        page = CategoryPage.new(site, site.source, dir, category, base_path, slug_path, page)
        page.pager = pager
        site.pages << page
      end
    end
  end

  class CategoryPage < Page
    def initialize(site, base, dir, category, base_path, slug_path, page)
      @site = site
      @base = base
      @dir = dir
      @name = 'index.html'

      self.process(@name)
      self.read_yaml(File.join(base, '_layouts'), site.config['categories']['layout'])
      self.data['category'] = category

      category_title_prefix = site.data['locales']['categories']['title_prefix']
      category_descr_prefix = site.data['locales']['categories']['descr_prefix']
      category_descr_postfix = site.data['locales']['categories']['descr_postfix']
      self.data['title'] = "#{category_title_prefix}#{category}"
      self.data['description'] = "#{category_descr_prefix}#{category}#{category_descr_postfix}#{page}"
      self.data['base'] = base_path
      self.data['slug'] = slug_path
    end
  end

  class CategoryPager < Jekyll::Paginate::Pager
    attr_reader :category

    def initialize(site, page, all_posts, category, num_pages = nil)
      @category = category
      super site, page, all_posts, num_pages
    end

    alias_method :original_to_liquid, :to_liquid

    def to_liquid
      liquid = original_to_liquid
      liquid['category'] = @category
      liquid
    end
  end

end
