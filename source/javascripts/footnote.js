jQuery.noConflict();jQuery(document).ready(function(){Footnotes.setup()});var Footnotes={footnotetimeout:false,setup:function(){var e=jQuery("a[rel='footnote']");e.unbind("mouseover",Footnotes.footnoteover);e.unbind("mouseout",Footnotes.footnoteoout);e.bind("mouseover",Footnotes.footnoteover);e.bind("mouseout",Footnotes.footnoteoout)},footnoteover:function(){clearTimeout(Footnotes.footnotetimeout);jQuery("#footnotediv").stop();jQuery("#footnotediv").remove();var e=jQuery(this).attr("href").substr(1);var t=jQuery(this).offset();var n=jQuery(document.createElement("div"));n.attr("id","footnotediv");n.bind("mouseover",Footnotes.divover);n.bind("mouseout",Footnotes.footnoteoout);var r=document.getElementById(e);n.html(jQuery(r).html());n.html($(r).html());n.find("a[rev='footnote']").remove();n.css({position:"absolute",opacity:.9});jQuery(document.body).append(n);var i=t.left;if(i+420>jQuery(window).width()+jQuery(window).scrollLeft())i=jQuery(window).width()-420+jQuery(window).scrollLeft();var s=t.top+20;if(s+n.height()>jQuery(window).height()+jQuery(window).scrollTop())s=t.top-n.height()-15;n.css({left:i,top:s})},footnoteoout:function(){Footnotes.footnotetimeout=setTimeout(function(){jQuery("#footnotediv").animate({opacity:0},600,function(){jQuery("#footnotediv").remove()})},100)},divover:function(){clearTimeout(Footnotes.footnotetimeout);jQuery("#footnotediv").stop();jQuery("#footnotediv").css({opacity:.9})}}
