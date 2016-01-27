module Jekyll

  class TagGenerator < Generator
    safe true

    def generate(site)
      if site.layouts.key? 'tag'
        site.tags.keys.each do |tag|
          paginate(site, tag)
        end
      end
    end

    def paginate(site, tag)
      tag_posts = site.posts.docs.find_all {|post| post.to_liquid['tags'].include?(tag)}.sort_by {|post| -post.date.to_f}
      num_pages = TagPager.calculate_pages(tag_posts, site.config['paginate'].to_i)
      tag_name = tag.gsub(/\s+/, site.config['tags']['delimiter'])
      (1..num_pages).each do |page|
        pager = TagPager.new(site, page, tag_posts, tag_name, num_pages)
        dir = File.join(site.config['tags']['url'], tag_name, page > 1 ? site.config['tags']['slug'] + "#{page}" : '')
	      base_path = site.config['tags']['url'] + "#{tag_name}" + "/"
	      slug_path = site.config['tags']['slug']
        page = TagPage.new(site, site.source, dir, tag, base_path, slug_path, page)
        page.pager = pager
        site.pages << page
      end
    end
  end

  class TagPage < Page
    def initialize(site, base, dir, tag, base_path, slug_path, page)
      @site = site
      @base = base
      @dir = dir
      @name = 'index.html'

      self.process(@name)
      self.read_yaml(File.join(base, '_layouts'), site.config['tags']['layout'])
      self.data['tag'] = tag

      tag_title_prefix = site.data['locales']['tags']['title_prefix']
      tag_descr_prefix = site.data['locales']['tags']['descr_prefix']
      tag_descr_postfix = site.data['locales']['tags']['descr_postfix']
      self.data['title'] = "#{tag_title_prefix}#{tag}"
      self.data['description'] = "#{tag_descr_prefix}#{tag}#{tag_descr_postfix}#{page}"
      self.data['base'] = base_path
      self.data['slug'] = slug_path
    end
  end

  class TagPager < Jekyll::Paginate::Pager
    attr_reader :tag

    def initialize(site, page, all_posts, tag, num_pages = nil)
      @tag = tag
      super site, page, all_posts, num_pages
    end

    alias_method :original_to_liquid, :to_liquid

    def to_liquid
      liquid = original_to_liquid
      liquid['tag'] = @tag
      liquid
    end
  end

end
