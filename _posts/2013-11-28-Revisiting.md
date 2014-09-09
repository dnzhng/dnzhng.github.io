---
title: Revisiting the blog
layout: post
comments: true
---
##Hiatus

With school, it was really hard for me to work on the blog, as I was caught up in a lot of other things. However, with Thanksgiving Break here, I was finally able to revisit this page. It was interesting, looking through my repository. I saw a lot of files that I did not really think were the most necessary, and I had essentially forgotten a lot of how Jekyll and Jekyll bootstrap worked. 

So it was refreshing to review how everything worked. I deleted a lot of things from my repos, and saw that some things actually were necessary (haha). Nonetheless, it was a good review of liquid, and I think I reorganized some of the code, making my page more efficient. 

I also updated the site to make it more navigable. Every post has an individual page, and I was able to get disqus comments to be integrated into the page. Also, to conserve space, I was able to make the main blog page show only previews of the posts. This only required a single line of code: 

{% highlight ruby linenos %}{% raw %}
		{{ post.content | truncatewords:250 }}
		{% include readmore.html %}
{% endraw %}{% endhighlight %}

Doing so automatically cut the posts off after 250 words, and then included a read more link (in html) to the full post. 

Another reason why I really enjoyed revisiting liquid, Jekyll, and the blog is that when I was first making ths blog over the summer, I had a pretty limited understanding of what was going on. However, now I feel like I know why I am inserting certain lines of code, and how these lines are exactly affecting my page. 

I'm excited for the future of this blog, as well as my development as a developer (haha?). 