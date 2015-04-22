module Jekyll

	class CategoryPage < Page
		def initialize(site, base, dir, category)
			@site = site
			@base = base
			@dir = dir
			@name = 'index.html'

			self.process(@name)
			self.read_yaml(File.join(base, '_layouts'), site.config['categories']['layout'])
			self.data['category'] = category

			category_title_prefix = site.config['categories']['title_prefix']
			category_descr_prefix = site.config['categories']['descr_prefix']
			self.data['title'] = "#{category_title_prefix}#{category}"
			self.data['description'] = "#{category_descr_prefix}&laquo;#{category}&raquo;"
		end
	end

	class CategoryPageGenerator < Generator
		##
		# Generates pages for each category and
		# places them in a directory folder with
		# a slugified name of the category.

		safe true

		def generate(site)
			if site.layouts.key? 'category'
				dir = site.config['categories']['url']
				site.categories.keys.each do |category|
					category_name = category.gsub(/\s+/, '-')
					site.pages << CategoryPage.new(site, site.source, File.join(dir, category_name), category)
				end
			end
		end
	end

	class TagPage < Page
		def initialize(site, base, dir, tag)
			@site = site
			@base = base
			@dir = dir
			@name = 'index.html'

			self.process(@name)
			self.read_yaml(File.join(base, '_layouts'), site.config['tags']['layout'])
			self.data['tag'] = tag

			tag_title_prefix = site.config['tags']['title_prefix']
			tag_descr_prefix = site.config['tags']['descr_prefix']
			self.data['title'] = "#{tag_title_prefix}#{tag}"
			self.data['description'] = "#{tag_descr_prefix}&laquo;#{tag}&raquo;"
		end
	end

	class TagPageGenerator < Generator
		##
		# Generates pages for each tag and
		# places them in a directory folder with
		# a slugified name of the tag.

		safe true

		def generate(site)
			if site.layouts.key? 'tag'
				dir = site.config['tags']['url']
				site.tags.keys.each do |tag|
					tag_name = tag.gsub(/\s+/, '-')
					site.pages << TagPage.new(site, site.source, File.join(dir, tag_name), tag)
				end
			end
		end
	end

end
