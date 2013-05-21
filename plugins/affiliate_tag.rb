module Jekyll
  class AffiliateTag < Liquid::Tag
    def initialize(tag_name, text, token)
      super
      @text           = text
    end

    def render(context)
      aff = "<div class=\"affiliate\">"
      aff += "This post contains affiliate links to #{@text.strip}. If you
<<<<<<< HEAD
      buy something through these links I get a small commission to help fund this blog. There
=======
      buy through these links I get a small commission to help fund this blog. There
>>>>>>> Adds a plugin to denote affiliate links in a post.
      is no additional cost involved for you. Thanks for your support!"
      aff += "</div>"
    end
  end
end

Liquid::Template.register_tag('affiliate', Jekyll::AffiliateTag)

