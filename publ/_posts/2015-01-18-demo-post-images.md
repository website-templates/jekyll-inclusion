---
layout: post
title: "Demo post &mdash; images"
description: "This is the second post with tests and demo for images with code snippets and explanations"
date: 2015-01-18
tags: 
- Lorem ipsum
- test 
- demo
- page elements
- images
category:
- technologies
start_img: "static/images/post/2015-01-18-demo-post-images/meta/common-1.jpg"
thumb_img: "static/images/post/2015-01-18-demo-post-images/meta/cm-1.jpg"
comments: true
--- 

<!-- Images demo start-->
<h3 class="typo typo_serif typo_center">Images</h3>
<blockquote class="bq bq_align-center">
	<p>Well, here you can see centerd, floated or extra-positioned images. Also you can check fullscreen prview of images by clicking on them. For this purpose I've used <a rel="nofollow" href="https://github.com/tholman/intense-images">Intense Images plugin</a> It's really awesome thing!</p>
</blockquote>

<!-- left-floated image -->    
<figure class="code code_center code_center-extra">
	<pre><code class="language-markup">    
&lt;figure class=&quot;image image_left&quot;&gt;
	&lt;img class=&quot;js-lazy js-view&quot; src=&quot;data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7&quot; data-src=&quot;/static/images/post/2015-01-18-demo-post-images/1.jpg&quot; data-title=&quot;Cruise ship&quot; alt=&quot;Cruise ship in Trondheimsfjorden, 1923&quot; /&gt;
	&lt;figcaption&gt;Cruise ship in Trondheimsfjorden, 1923&lt;/figcaption&gt;
&lt;/figure&gt;        
	</code></pre>
	<figcaption>Left-floated image</figcaption>
</figure>
<figure class="image image_left" title="Left-floated image. Click on it to see enlarged image">
	<img class="js-lazy js-view" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-src="{{ site.baseurl }}/static/images/post/2015-01-18-demo-post-images/1.jpg" data-title="Cruise ship" alt="Cruise ship in Trondheimsfjorden, 1923" />
	<figcaption>Cruise ship in Trondheimsfjorden, 1923</figcaption>
</figure>
<p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat</p>
<p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat</p>

<!-- right-floated image -->    
<figure class="code code_center code_center-extra">
	<pre><code class="language-markup">    
&lt;figure class=&quot;image image_right&quot;&gt;
	&lt;img class=&quot;js-lazy js-view&quot; src=&quot;data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7&quot; data-src=&quot;/static/images/post/2015-01-18-demo-post-images/2.jpg&quot; data-title=&quot;Canyon bridge&quot; alt=&quot;Capilano Canyon, North Vancouver&quot; /&gt;
	&lt;figcaption&gt;Capilano Canyon, North Vancouver&lt;/figcaption&gt;
&lt;/figure&gt;        
	</code></pre>
	<figcaption>Right-floated image</figcaption>
</figure>
<figure class="image image_right" title="Right-floated image. Click on it to see enlarged image">
	<img class="js-lazy js-view" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-src="{{ site.baseurl }}/static/images/post/2015-01-18-demo-post-images/2.jpg" data-title="Canyon bridge" alt="Capilano Canyon, North Vancouver" />
	<figcaption>Capilano Canyon, North Vancouver</figcaption>
</figure>
<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>
<p>In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.</p>

<!-- centered image -->
<figure class="code code_center code_center-extra">
	<pre><code class="language-markup">
&lt;figure class=&quot;image image_center&quot;&gt;
	&lt;img class=&quot;js-lazy js-view&quot; src=&quot;data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7&quot; data-src=&quot;/static/images/post/2015-01-18-demo-post-images/3.jpg&quot; data-title=&quot;Beacon&quot; alt=&quot;Lindesnes Fyr&quot; /&gt;
	&lt;figcaption&gt;Lindesnes Fyr&lt;/figcaption&gt;
&lt;/figure&gt;                
	</code></pre>
	<figcaption>Centered full-width image</figcaption>
</figure>    
<figure class="image image_center" title="Centered full-width image. Click on it to see enlarged image">
	<img class="js-lazy js-view" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-src="{{ site.baseurl }}/static/images/post/2015-01-18-demo-post-images/3.jpg" data-title="Beacon" alt="Lindesnes Fyr" />
	<figcaption>Lindesnes Fyr</figcaption>
</figure>                   
<p>Fusce vel magna commodo, sodales risus at, eleifend nibh. Nulla tristique metus eu ante elementum, sit amet tempor purus molestie. In luctus feugiat lacus sed lobortis. Suspendisse potenti. In sed magna ornare, aliquet ligula vitae, scelerisque ligula. Donec ac lacus vel lorem aliquet malesuada in sit amet sapien. Aliquam erat volutpat. Nullam gravida faucibus tellus semper molestie. </p>

<!-- left-floated (with extra margin) image -->
<figure class="code code_center code_center-extra">
	<pre><code class="language-markup"> 
&lt;figure class=&quot;image image_left image_left-extra&quot;&gt;
	&lt;img class=&quot;js-lazy js-view&quot; src=&quot;data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7&quot; data-src=&quot;/static/images/post/2015-01-18-demo-post-images/4.jpg&quot; data-title=&quot;Orange sky&quot; alt=&quot;Transmission lines in May 1972&quot; /&gt;
	&lt;figcaption&gt;Transmission lines in May 1972&lt;/figcaption&gt;
&lt;/figure&gt;               
	</code></pre>
	<figcaption>Left floated image with extra margin</figcaption>
</figure>
<figure class="image image_left image_left-extra" title="Left floated image with extra margin. Click on it to see enlarged image">
	<img class="js-lazy js-view" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-src="{{ site.baseurl }}/static/images/post/2015-01-18-demo-post-images/4.jpg" data-title="Orange sky" alt="Transmission lines in May 1972" />
	<figcaption>Transmission lines in May 1972</figcaption>
</figure>
<p>Phasellus euismod neque at odio congue bibendum. Nam neque lectus, hendrerit nec ligula nec, feugiat tincidunt dolor. Maecenas id sem orci. Ut non velit est. Nullam et lectus in arcu rhoncus rutrum vitae vitae augue. Donec sodales risus auctor velit vulputate, vel elementum velit viverra. Nulla mattis scelerisque tellus eget malesuada. Donec tempus vulputate felis, id dictum odio euismod sit amet. </p>
<p>Curabitur adipiscing leo eu ipsum rhoncus, quis imperdiet elit pretium. Praesent viverra nunc et justo commodo tincidunt. Mauris leo augue, fringilla vitae tempor in, facilisis in sapien. Integer dui sapien, placerat at orci sit amet, laoreet vestibulum nunc. Vestibulum nec placerat felis. Etiam blandit massa ac ligula aliquet pretium. Suspendisse potenti. Aliquam erat volutpat. Quisque id auctor felis. Proin sollicitudin euismod aliquam. </p>

<!-- right-floated (with extra margin) image -->
<figure class="code code_center code_center-extra">
	<pre><code class="language-markup">
&lt;figure class=&quot;image image_right image_right-extra&quot;&gt;
	&lt;img class=&quot;js-lazy js-view&quot; src=&quot;data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7&quot; data-src=&quot;/static/images/post/2015-01-18-demo-post-images/5.jpg&quot; data-title=&quot;Surveying&quot; alt=&quot;Surveying at Innveien, Veiholmen, 1923.&quot; /&gt;
	&lt;figcaption&gt;Surveying at Innveien, Veiholmen, 1923.&lt;/figcaption&gt;
&lt;/figure&gt;                
	</code></pre>
	<figcaption>Right floated image and with extra margin</figcaption>
</figure>
<figure class="image image_right image_right-extra" title="Right floated image and with extra margin. Click on it to see enlarged image">
	<img class="js-lazy js-view" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-src="{{ site.baseurl }}/static/images/post/2015-01-18-demo-post-images/5.jpg" data-title="Surveying" alt="Surveying at Innveien, Veiholmen, 1923." />
	<figcaption>Surveying at Innveien, Veiholmen, 1923.</figcaption>
</figure>                       
<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
<p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
	
<!-- centered extra margin image -->
<figure class="code code_center code_center-extra">
	<pre><code class="language-markup"> 
&lt;figure class=&quot;image image_center image_center-extra&quot;&gt;
	&lt;img class=&quot;js-lazy js-view&quot; src=&quot;data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7&quot; data-src=&quot;/static/images/post/2015-01-18-demo-post-images/8.jpg&quot; data-title=&quot;Old view&quot; alt=&quot;Perspective of Jackson, Miss. 1925.&quot; /&gt;
	&lt;figcaption&gt;Perspective of Jackson, Miss. 1925.&lt;/figcaption&gt;
&lt;/figure&gt;               
	</code></pre>
	<figcaption>Centered image and with extra margins</figcaption>
</figure>    
<figure class="image image_center image_center-extra" title="Centered image and with extra margins. Click on it to see enlarged image">
	<img class="js-lazy js-view" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-src="{{ site.baseurl }}/static/images/post/2015-01-18-demo-post-images/8.jpg" data-title="Old view" alt="Perspective of Jackson, Miss. 1925." />
	<figcaption>Perspective of Jackson, Miss. 1925.</figcaption>
</figure>
