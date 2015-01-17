---
layout: post
title: "Lorem ipsum"
subtitle: "This mega-post &mdash; test and demo for page elements with code snipets and explanations"
date: 2014-12-04
labels: 
- Lorem ipsum
- test 
- demo
- page elements
home_img: "img/post/lorem/4.jpg"
end_img: "img/post/lorem/2.jpg"
thumb_img: "img/post/lorem/kitten.jpg"
comments: true
---

<h2 class="typo_center">Page elements</h2>
<div class="chapter">
    <p>This blog is based on <span class="inclusion">Inclusion</span> framework, so it's tools allow us to decorate our content. Just add predefined classname to our markup element - and that's all! Here is orifinal description:</p>
    <blockquote class="bq_align-center">
        <p>Here you can see live examples of page elements that were created with <span class="inclusion">Inclusion</span>. There are about eight groups of elements with it's own styles: headings and text, images, blockquotes, lists, code blocks, abstract blocks (with spoilers) that used as containers for different content, tables and buttons. Basic inclusions like section, chapter or navigation are not shown here.</p>
        <cite><a rel="nofollow" href="http://orlovmax.com/lab/tools/inclusion">Inclusion description</a></cite>
    </blockquote>
    <p>Let me say a few words about structure of rhis post &mdash; it's really huge, but no less important. So we have chapters that contain code snippets and their result examples. Here is a list with anchor links to related chapters:</p>
    <ul class="list_center">
        <li><a class="js-anchor" href="#demo__typo">Typo</a></li>
        <li><a class="js-anchor" href="#demo__images">Images</a></li>
        <li><a class="js-anchor" href="#demo__blockquotes">Blockquotes</a></li>
        <li><a class="js-anchor" href="#demo__lists">Lists</a></li>
        <li><a class="js-anchor" href="#demo__code">Code blocks</a></li>
        <li><a class="js-anchor" href="#demo__tables">Tables</a></li>
        <li><a class="js-anchor" href="#demo__blocks">Blocks</a></li>
        <li><a class="js-anchor" href="#demo__buttons">Buttons</a></li>
        <li><a class="js-anchor" href="#demo__grid">Grid</a></li>
    </ul>
</div>

<section class="chapter" id="demo__typo">                       
    <h3 class="typo_serif typo_center">Headings and text</h3>

<!--paragraph-->    
    <p title="Paragraph element - just a common text with normal font">This paragraph is example of common text block with normal font and justified alignement. Let's add some lorem ipsum to see how it works!</p>    
    <p title="Paragraph element - just a common text with normal font">Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat</p> 

<!--centered titles-->
    <figure class="code_center code_center-extra">
        <pre><code class="language-markup">    
    &lt;h4 class=&quot;typo_sans typo_center&quot;&gt;Centered subtitle with normal font&lt;/h4&gt;
    &lt;h4 class=&quot;typo_serif typo_center&quot;&gt;Centered subtitle with serif font&lt;/h4&gt;
    &lt;h4 class=&quot;typo_condensed typo_center&quot;&gt;Centered subtitle with condensed font&lt;/h4&gt;        
        </code></pre>
        <figcaption>Centered headings</figcaption>
    </figure>
    <h4 class="typo_sans typo_center" title="Centered subtitle with sans-serif font">Centered subtitle with normal font</h4>
    <br>
    <br>
    <h4 class="typo_serif typo_center" title="Centered subtitle with serif font">Centered subtitle with serif font</h4>
    <br>
    <br>
    <h4 class="typo_condensed typo_center" title="Centered subtitle with condensed sans-serif font">Centered subtitle with condensed font</h4>
    <br>
    <br>

<!-- left-aligned titles -->
    <figure class="code_center code_center-extra">
        <pre><code class="language-markup">    
    &lt;h4 class=&quot;typo_sans typo_left&quot;&gt;Left aligned subtitle with normal font&lt;/h4&gt;
    &lt;h4 class=&quot;typo_serif typo_left&quot;&gt;Left aligned subtitle with serif font&lt;/h4&gt;
    &lt;h4 class=&quot;typo_condensed typo_left&quot;&gt;Left aligned subtitle with condensed font&lt;/h4&gt;        
        </code></pre>
        <figcaption>Left-aligned headings</figcaption>
    </figure>
    <h4 class="typo_sans typo_left" title="Left aligned subtitle with normal font">Left aligned subtitle with normal font</h4>
    <br>
    <br>
    <h4 class="typo_serif typo_left" title="Left aligned subtitle with serif font">Left aligned subtitle with serif font</h4>
    <br>
    <br>
    <h4 class="typo_condensed typo_left" title="Left aligned subtitle with condensed font">Left aligned subtitle with condensed font</h4>
    <br>
    <br>

<!-- right-aligned titles -->
    <figure class="code_center code_center-extra">
        <pre><code class="language-markup">    
    &lt;h4 class=&quot;typo_sans typo_right&quot;&gt;Right aligned subtitle with normal font&lt;/h4&gt;
    &lt;h4 class=&quot;typo_serif typo_right&quot;&gt;Right aligned subtitle with serif font&lt;/h4&gt;
    &lt;h4 class=&quot;typo_condensed typo_right&quot;&gt;Right aligned subtitle with condensed font&lt;/h4&gt;        
        </code></pre>
        <figcaption>Right-aligned headings</figcaption>
    </figure>
    <h4 class="typo_sans typo_right" title="Right aligned subtitle with normal font">Right aligned subtitle with normal font</h4>
    <br>
    <br>
    <h4 class="typo_serif typo_right" title="Right aligned subtitle with serif font">Right aligned subtitle with serif font</h4>
    <br>
    <br>
    <h4 class="typo_condensed typo_right" title="Right aligned subtitle with condensed font">Right aligned subtitle with condensed font</h4>
    <br>
    <br>
    <blockquote class="bq_align-center">
        <p>Note, that we can use floated headings andd text blocks within special float block, and we'll check this in chapter <a class="js-anchor" href="#demo__blocks">Blocks</a></p>
    </blockquote>
</section>

<!-- Images demo start-->
<section class="chapter" id="demo__images">
    <h3 class="typo_serif typo_center">Images</h3>
    <blockquote class="bq_align-center">
        <p>Well, here you can see centerd, floated or extra-positioned images. Also you can check fullscreen prview of images by clicking on them. For this purpose I've used <a rel="nofollow" href="https://github.com/tholman/intense-images">Intense Images plugin</a> It's really awesome thing!</p>
    </blockquote>

<!-- left-floated image -->    
    <figure class="code_center code_center-extra">
        <pre><code class="language-markup">    
    &lt;figure class=&quot;image_left&quot;&gt;
        &lt;img class=&quot;js-lazy js-view&quot; src=&quot;data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7&quot; data-src=&quot;/img/post/lorem/1.jpg&quot; data-title=&quot;Cruise ship&quot; alt=&quot;Cruise ship in Trondheimsfjorden, 1923&quot; /&gt;
        &lt;figcaption&gt;Cruise ship in Trondheimsfjorden, 1923&lt;/figcaption&gt;
    &lt;/figure&gt;        
        </code></pre>
        <figcaption>Left-floated image</figcaption>
    </figure>
    <figure class="image_left" title="Left-floated image. Click on it to see enlarged image">
        <img class="js-lazy js-view" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-src="/img/post/lorem/1.jpg" data-title="Cruise ship" alt="Cruise ship in Trondheimsfjorden, 1923" />
        <figcaption>Cruise ship in Trondheimsfjorden, 1923</figcaption>
    </figure>
    <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat</p>
    <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat</p>

<!-- right-floated image -->    
    <figure class="code_center code_center-extra">
        <pre><code class="language-markup">    
    &lt;figure class=&quot;image_right&quot;&gt;
        &lt;img class=&quot;js-lazy js-view&quot; src=&quot;data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7&quot; data-src=&quot;/img/post/lorem/2.jpg&quot; data-title=&quot;Canyon bridge&quot; alt=&quot;Capilano Canyon, North Vancouver&quot; /&gt;
        &lt;figcaption&gt;Capilano Canyon, North Vancouver&lt;/figcaption&gt;
    &lt;/figure&gt;        
        </code></pre>
        <figcaption>Right-floated image</figcaption>
    </figure>
    <figure class="image_right" title="Right-floated image. Click on it to see enlarged image">
        <img class="js-lazy js-view" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-src="/img/post/lorem/2.jpg" data-title="Canyon bridge" alt="Capilano Canyon, North Vancouver" />
        <figcaption>Capilano Canyon, North Vancouver</figcaption>
    </figure>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>
    <p>In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.</p>

<!-- centered image -->
    <figure class="code_center code_center-extra">
        <pre><code class="language-markup">
    &lt;figure class=&quot;image_center&quot;&gt;
        &lt;img class=&quot;js-lazy js-view&quot; src=&quot;data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7&quot; data-src=&quot;/img/post/lorem/3.jpg&quot; data-title=&quot;Beacon&quot; alt=&quot;Lindesnes Fyr&quot; /&gt;
        &lt;figcaption&gt;Lindesnes Fyr&lt;/figcaption&gt;
    &lt;/figure&gt;                
        </code></pre>
        <figcaption>Centered full-width image</figcaption>
    </figure>    
    <figure class="image_center" title="Centered full-width image. Click on it to see enlarged image">
        <img class="js-lazy js-view" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-src="/img/post/lorem/3.jpg" data-title="Beacon" alt="Lindesnes Fyr" />
        <figcaption>Lindesnes Fyr</figcaption>
    </figure>                   
    <p>Fusce vel magna commodo, sodales risus at, eleifend nibh. Nulla tristique metus eu ante elementum, sit amet tempor purus molestie. In luctus feugiat lacus sed lobortis. Suspendisse potenti. In sed magna ornare, aliquet ligula vitae, scelerisque ligula. Donec ac lacus vel lorem aliquet malesuada in sit amet sapien. Aliquam erat volutpat. Nullam gravida faucibus tellus semper molestie. </p>

<!-- left-floated (with extra margin) image -->
    <figure class="code_center code_center-extra">
        <pre><code class="language-markup"> 
    &lt;figure class=&quot;image_left image_left-extra&quot;&gt;
        &lt;img class=&quot;js-lazy js-view&quot; src=&quot;data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7&quot; data-src=&quot;/img/post/lorem/4.jpg&quot; data-title=&quot;Orange sky&quot; alt=&quot;Transmission lines in May 1972&quot; /&gt;
        &lt;figcaption&gt;Transmission lines in May 1972&lt;/figcaption&gt;
    &lt;/figure&gt;               
        </code></pre>
        <figcaption>Left floated image with extra margin</figcaption>
    </figure>
    <figure class="image_left image_left-extra" title="Left floated image with extra margin. Click on it to see enlarged image">
        <img class="js-lazy js-view" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-src="/img/post/lorem/4.jpg" data-title="Orange sky" alt="Transmission lines in May 1972" />
        <figcaption>Transmission lines in May 1972</figcaption>
    </figure>
    <p>Phasellus euismod neque at odio congue bibendum. Nam neque lectus, hendrerit nec ligula nec, feugiat tincidunt dolor. Maecenas id sem orci. Ut non velit est. Nullam et lectus in arcu rhoncus rutrum vitae vitae augue. Donec sodales risus auctor velit vulputate, vel elementum velit viverra. Nulla mattis scelerisque tellus eget malesuada. Donec tempus vulputate felis, id dictum odio euismod sit amet. </p>
    <p>Curabitur adipiscing leo eu ipsum rhoncus, quis imperdiet elit pretium. Praesent viverra nunc et justo commodo tincidunt. Mauris leo augue, fringilla vitae tempor in, facilisis in sapien. Integer dui sapien, placerat at orci sit amet, laoreet vestibulum nunc. Vestibulum nec placerat felis. Etiam blandit massa ac ligula aliquet pretium. Suspendisse potenti. Aliquam erat volutpat. Quisque id auctor felis. Proin sollicitudin euismod aliquam. </p>

<!-- right-floated (with extra margin) image -->
    <figure class="code_center code_center-extra">
        <pre><code class="language-markup">
    &lt;figure class=&quot;image_right image_right-extra&quot;&gt;
        &lt;img class=&quot;js-lazy js-view&quot; src=&quot;data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7&quot; data-src=&quot;/img/post/lorem/5.jpg&quot; data-title=&quot;Surveying&quot; alt=&quot;Surveying at Innveien, Veiholmen, 1923.&quot; /&gt;
        &lt;figcaption&gt;Surveying at Innveien, Veiholmen, 1923.&lt;/figcaption&gt;
    &lt;/figure&gt;                
        </code></pre>
        <figcaption>Right floated image and with extra margin</figcaption>
    </figure>
    <figure class="image_right image_right-extra" title="Right floated image and with extra margin. Click on it to see enlarged image">
        <img class="js-lazy js-view" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-src="/img/post/lorem/5.jpg" data-title="Surveying" alt="Surveying at Innveien, Veiholmen, 1923." />
        <figcaption>Surveying at Innveien, Veiholmen, 1923.</figcaption>
    </figure>                       
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
    <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
    
<!-- centered extra margin image -->
    <figure class="code_center code_center-extra">
        <pre><code class="language-markup"> 
    &lt;figure class=&quot;image_center image_center-extra&quot;&gt;
        &lt;img class=&quot;js-lazy js-view&quot; src=&quot;data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7&quot; data-src=&quot;/img/post/lorem/8.jpg&quot; data-title=&quot;Old view&quot; alt=&quot;Perspective of Jackson, Miss. 1925.&quot; /&gt;
        &lt;figcaption&gt;Perspective of Jackson, Miss. 1925.&lt;/figcaption&gt;
    &lt;/figure&gt;               
        </code></pre>
        <figcaption>Centered image and with extra margins</figcaption>
    </figure>    
    <figure class="image_center image_center-extra" title="Centered image and with extra margins. Click on it to see enlarged image">
        <img class="js-lazy js-view" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-src="/img/post/lorem/8.jpg" data-title="Old view" alt="Perspective of Jackson, Miss. 1925." />
        <figcaption>Perspective of Jackson, Miss. 1925.</figcaption>
    </figure>
</section>

<!-- Blockquotes demo start  -->
<section class="chapter" id="demo__blockquotes">
    <h3 class="typo_serif typo_center">Blockquotes</h3>

<!-- centered blockquote -->
    <figure class="code_center code_center-extra">
        <pre><code class="language-markup">    
    &lt;blockquote class=&quot;bq_align-center&quot;&gt;
        &lt;p&gt;Lorem ipsum dolor sit amet&lt;/p&gt;
        &lt;cite&gt;&lt;a rel=&quot;nofollow&quot; href=&quot;http://www.lipsum.com/&quot;&gt;Lorem Ipsum is simply dummy text&lt;/a&gt;&lt;/cite&gt;
    &lt;/blockquote&gt;                
        </code></pre>
        <figcaption>Centered full width blockquote with link</figcaption>
    </figure>
    <blockquote class="bq_align-center" title="Centered full width blockquote with link">
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
        <cite><a rel="nofollow" href="http://www.lipsum.com/">Lorem Ipsum is simply dummy text of the printing and typesetting industry</a></cite>
    </blockquote>
    <br>
    <br>

<!-- left-aligned blockquote -->
    <figure class="code_center code_center-extra">
        <pre><code class="language-markup">
    &lt;blockquote class=&quot;bq_align-left&quot;&gt;
        &lt;p&gt; Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes&lt;/p&gt;
        &lt;cite&gt;&lt;a rel=&quot;nofollow&quot; href=&quot;http://www.lipsum.com/&quot;&gt;Lorem Ipsum is simply dummy text&lt;/a&gt;&lt;/cite&gt;
    &lt;/blockquote&gt;                
        </code></pre>
        <figcaption>Left-aligned full width blockquote with link</figcaption>
    </figure>
    <blockquote class="bq_align-left" title="Left-aligned full width blockquote with link">
        <p> Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
        <cite><a rel="nofollow" href="http://www.lipsum.com/">Lorem Ipsum is simply dummy text of the printing and typesetting industry</a></cite>
    </blockquote>
    <br>
    <br>

<!-- left-floated blockquote -->
    <figure class="code_center code_center-extra">
        <pre><code class="language-markup"> 
    &lt;blockquote class=&quot;bq_align-left bq_pos-left&quot;&gt;
        &lt;p&gt; Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes&lt;/p&gt;
    &lt;/blockquote&gt;               
        </code></pre>
        <figcaption>Left-aligned, left-floated blockquote without link</figcaption>
    </figure>
    <blockquote class="bq_align-left bq_pos-left" title="Left-aligned, left-floated blockquote without link">
        <p> Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
    </blockquote>
    <p>Sed mattis ultricies odio eget luctus. Duis quam neque, auctor at ante ut, pretium dictum justo. Phasellus ligula lorem, pharetra ut dapibus id, posuere eget massa. Sed in mauris ultricies, euismod nisi a, pharetra est. Mauris vitae porta diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla malesuada posuere posuere. Nullam adipiscing lacinia odio, sed bibendum leo scelerisque id. Proin eu egestas metus, quis semper mauris. Cras arcu ligula, hendrerit ac tempus ac, porta nec odio. Vivamus sed risus quis nisl aliquam egestas quis in est. Phasellus id nisl vitae ante iaculis convallis venenatis non diam. </p>

<!-- right-floated blockquote -->
    <figure class="code_center code_center-extra">
        <pre><code class="language-markup">
    &lt;blockquote class=&quot;bq_align-right bq_pos-right&quot;&gt;
        &lt;p&gt; Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes&lt;/p&gt;
    &lt;/blockquote&gt;                
        </code></pre>
        <figcaption>Right-aligned, right-floated blockquote without link</figcaption>
    </figure>
    <blockquote class="bq_align-right bq_pos-right" title="Right-aligned, right-floated blockquote without link">
        <p> Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
    </blockquote>
    <p>Nullam adipiscing enim mattis purus pretium, in vestibulum enim lacinia. Fusce tellus nunc, facilisis vitae facilisis commodo, laoreet ut dui. Sed a arcu imperdiet, mollis velit et, auctor nisi. Donec porttitor dapibus interdum. Morbi imperdiet varius lobortis. Ut accumsan lacus ac laoreet vestibulum. Aliquam facilisis at ipsum vel lobortis. Nunc sed cursus elit. Nullam sodales, magna nec rutrum convallis, purus urna posuere nisl, eu dapibus nunc purus ac mi. Donec vel leo commodo, faucibus augue ac, gravida massa. Ut sagittis urna nec commodo vehicula. Duis nec consequat lectus, sit amet faucibus est. Nam a sagittis odio, eu mollis diam. </p>

<!-- right-aligned blockquote -->
    <figure class="code_center code_center-extra">
        <pre><code class="language-markup">
    &lt;blockquote class=&quot;bq_align-right&quot;&gt;
        &lt;p&gt; Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes&lt;/p&gt;
        &lt;cite&gt;&lt;a rel=&quot;nofollow&quot; href=&quot;http://www.lipsum.com/&quot;&gt;Lorem Ipsum is simply dummy text&lt;/a&gt;&lt;/cite&gt;
    &lt;/blockquote&gt;                
        </code></pre>
        <figcaption>Right-aligned full width blockquote with link</figcaption>
    </figure>
    <blockquote class="bq_align-right" title="Right-aligned full width blockquote with link">
        <p> Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
        <cite><a rel="nofollow" href="http://www.lipsum.com/">Lorem Ipsum is simply dummy text of the printing and typesetting industry</a></cite>
    </blockquote>
    <br>
    <br>

<!-- centered extra margin blockquote -->
    <figure class="code_center code_center-extra">
        <pre><code class="language-markup">
    &lt;blockquote class=&quot;bq_align-center bq_pos-center bq_pos-center-extra&quot;&gt;
        &lt;p&gt;Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.&lt;/p&gt;
    &lt;/blockquote&gt;                
        </code></pre>
        <figcaption>Centered blockquote with extra margins and without link</figcaption>
    </figure>
    <blockquote class="bq_align-center bq_pos-center bq_pos-center-extra" title="Centered blockquote with extra margins and without link">
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
    </blockquote>
    <br>
    <br>

<!-- left-aligned full-width extra margin blockquote --> 
    <figure class="code_center code_center-extra">
        <pre><code class="language-markup">
    &lt;blockquote class=&quot;bq_align-left bq_pos-left-extra&quot;&gt;
        &lt;p&gt;Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.&lt;/p&gt;
    &lt;/blockquote&gt;                
        </code></pre>
        <figcaption>Left-aligned, full width blockquote with extra margins and without link</figcaption>
    </figure>   
    <blockquote class="bq_align-left bq_pos-left-extra" title="Left-aligned, full width blockquote with extra margins and without link">
        <p>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
    </blockquote>
    <br>
    <br>

<!-- left-aligned left-floated (with extra margin) blockquote -->
    <figure class="code_center code_center-extra">
        <pre><code class="language-markup">
    &lt;blockquote class=&quot;bq_align-left bq_pos-left bq_pos-left-extra&quot;&gt;
        &lt;p&gt; Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.&lt;/p&gt;
        &lt;cite&gt;&lt;a rel=&quot;nofollow&quot; href=&quot;http://www.lipsum.com/&quot;&gt;Lorem Ipsum is simply dummy text&lt;/a&gt;&lt;/cite&gt;
    &lt;/blockquote&gt;                
        </code></pre>
        <figcaption>Left-aligned, left-floated blockquote with extra margins and link</figcaption>
    </figure>
    <blockquote class="bq_align-left bq_pos-left bq_pos-left-extra" title="Left-aligned, left-floated blockquote with extra margins and link">
        <p> Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
        <cite><a rel="nofollow" href="http://www.lipsum.com/">Lorem Ipsum is simply dummy text</a></cite>
    </blockquote>
    <p>Sed mattis ultricies odio eget luctus. Duis quam neque, auctor at ante ut, pretium dictum justo. Phasellus ligula lorem, pharetra ut dapibus id, posuere eget massa. Sed in mauris ultricies, euismod nisi a, pharetra est. Mauris vitae porta diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla malesuada posuere posuere. Nullam adipiscing lacinia odio, sed bibendum leo scelerisque id. Proin eu egestas metus, quis semper mauris. Cras arcu ligula, hendrerit ac tempus ac, porta nec odio. Vivamus sed risus quis nisl aliquam egestas quis in est. </p>

<!-- right-aligned right-floated (with extra margin) blockquote -->
    <figure class="code_center code_center-extra">
        <pre><code class="language-markup">
    &lt;blockquote class=&quot;bq_align-right bq_pos-right bq_pos-right-extra&quot;&gt;
        &lt;p&gt;Nullam adipiscing lacinia odio, sed bibendum leo scelerisque id. Mauris vitae porta diam.&lt;/p&gt;
        &lt;cite&gt;&lt;a rel=&quot;nofollow&quot; href=&quot;http://www.lipsum.com/&quot;&gt;Lorem Ipsum is simply dummy text&lt;/a&gt;&lt;/cite&gt;
    &lt;/blockquote&gt;                
        </code></pre>
        <figcaption>Right-aligned, right-floated blockquote with extra margins and link</figcaption>
    </figure>
    <blockquote class="bq_align-right bq_pos-right bq_pos-right-extra" title="Right-aligned, right-floated blockquote with extra margins and link">
        <p>Nullam adipiscing lacinia odio, sed bibendum leo scelerisque id. Mauris vitae porta diam.</p>
        <cite><a rel="nofollow" href="http://www.lipsum.com/">Lorem Ipsum is simply dummy text</a></cite>
    </blockquote>
    <p>Sed mattis ultricies odio eget luctus. Duis quam neque, auctor at ante ut, pretium dictum justo. Phasellus ligula lorem, pharetra ut dapibus id, posuere eget massa. Sed in mauris ultricies, euismod nisi a, pharetra est. Mauris vitae porta diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla malesuada posuere posuere. Nullam adipiscing lacinia odio, sed bibendum leo scelerisque id. Proin eu egestas metus, quis semper mauris. Cras arcu ligula, hendrerit ac tempus ac, porta nec odio. </p>
    
<!-- right-aligned full-width extra margin blockquote -->
    <figure class="code_center code_center-extra">
        <pre><code class="language-markup"> 
    &lt;blockquote class=&quot;bq_align-right bq_pos-right-extra&quot;&gt;
        &lt;p&gt;Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.&lt;/p&gt;
    &lt;/blockquote&gt;               
        </code></pre>
        <figcaption>Right-aligned, full width blockquote with extra margins and without link</figcaption>
    </figure>
    <blockquote class="bq_align-right bq_pos-right-extra" title="Right-aligned, full width blockquote with extra margins and without link">
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. </p>
    </blockquote>
</section>

<!-- Lists demo start-->
<section class="chapter" id="demo__lists">
    <h3 class="typo_serif typo_center">Ordered and unordered lists</h3>
<!-- left-floated ordered list -->
    <figure class="code_center code_center-extra">
        <pre><code class="language-markup">    
    &lt;ol class=&quot;list_left&quot;&gt;
        &lt;li&gt;Lorem ipsum dolor sit amet, consectetuer adipiscing 
        elit. Aenean commodo ligula eget dolor. &lt;/li&gt;
        &lt;li&gt;Cum sociis natoque penatibus et magnis dis 
        parturient montes, nascetur ridiculus mus. &lt;/li&gt;
    &lt;/ol&gt;    
        </code></pre>
        <figcaption>Left-floated ordered list</figcaption>
    </figure>
    <ol class="list_left" title="Left-floated ordered list">
        <li>Lorem ipsum dolor sit amet, consectetuer adipiscing 
        elit. Aenean commodo ligula eget dolor. </li>
        <li>Cum sociis natoque penatibus et magnis dis 
        parturient montes, nascetur ridiculus mus. </li>
        <li>Nulla consequat massa quis enim. Donec pede justo, 
        fringilla vel, aliquet nec, vulputate eget, arcu.</li>
    </ol>  
    <p>Fusce vel magna commodo, sodales risus at, eleifend nibh. Nulla tristique metus eu ante elementum, sit amet tempor purus molestie. In luctus feugiat lacus sed lobortis.</p>
    <p>Suspendisse potenti. In sed magna ornare, aliquet ligula vitae, scelerisque ligula. Quisque aliquet odio quis eros fringilla iaculis. Pellentesque euismod lorem id sagittis fermentum. Suspendisse potenti. In sed magna ornare, aliquet ligula vitae, scelerisque ligula. Quisque aliquet odio quis eros fringilla iaculis. Pellentesque euismod lorem id sagittis fermentum. </p>

<!-- left-floated unordered list -->
    <figure class="code_center code_center-extra">
        <pre><code class="language-markup"> 
    &lt;ul class=&quot;list_left&quot;&gt;
        &lt;li&gt;Lorem ipsum dolor sit amet consectetuer.&lt;/li&gt;
        &lt;li&gt;Proin eu egestas metus, quis semper mauris.&lt;/li&gt;
        &lt;li&gt;Cras arcu ligula, hendrerit ac tempus ac.&lt;/li&gt;
    &lt;/ul&gt;    
        </code></pre>
        <figcaption>Left-floated unordered list</figcaption>
    </figure>
    <ul class="list_left" title="Left-floated unordered list">
        <li>Lorem ipsum dolor sit amet consectetuer.</li>
        <li>Proin eu egestas metus, quis semper mauris.</li>
        <li>Cras arcu ligula, hendrerit ac tempus ac.</li>
    </ul>                                           
    <p>Fusce vel magna commodo, sodales risus at, eleifend nibh. Nulla tristique metus eu ante elementum, sit amet tempor purus molestie. In luctus feugiat lacus sed lobortis. Suspendisse potenti. In sed magna ornare, aliquet ligula vitae, scelerisque ligula. Pellentesque euismod lorem id sagittis fermentum. Suspendisse potenti. In sed magna ornare, aliquet ligula vitae, scelerisque ligula. Quisque aliquet odio quis eros fringilla iaculis. Pellentesque euismod lorem id sagittis fermentum. </p>

<!-- right-floated ordered list -->
    <figure class="code_center code_center-extra">
        <pre><code class="language-markup"> 
    &lt;ol class=&quot;list_right&quot;&gt;
        &lt;li&gt;Lorem ipsum dolor sit amet, consectetuer adipiscing 
        elit. Aenean commodo ligula eget dolor. &lt;/li&gt;
        &lt;li&gt;Cum sociis natoque penatibus et magnis dis 
        parturient montes, nascetur ridiculus mus. &lt;/li&gt;
    &lt;/ol&gt;     
        </code></pre>
        <figcaption>Right-floated ordered list</figcaption>
    </figure>
    <ol class="list_right" title="Right-floated ordered list">
        <li>Lorem ipsum dolor sit amet, consectetuer adipiscing 
        elit. Aenean commodo ligula eget dolor. </li>
        <li>Cum sociis natoque penatibus et magnis dis 
        parturient montes, nascetur ridiculus mus. </li>
        <li>Nulla consequat massa quis enim. Donec pede justo, 
        fringilla vel, aliquet nec, vulputate eget, arcu.</li>
    </ol>   
    <p>Fusce vel magna commodo, sodales risus at, eleifend nibh. Nulla tristique metus eu ante elementum, sit amet tempor purus molestie. In luctus feugiat lacus sed lobortis. Suspendisse potenti. In sed magna ornare, aliquet ligula vitae, scelerisque ligula. Quisque aliquet odio quis eros fringilla iaculis. Pellentesque euismod lorem id sagittis fermentum. Suspendisse potenti. In sed magna ornare, aliquet ligula vitae, scelerisque ligula. Quisque aliquet odio quis eros fringilla iaculis. Pellentesque euismod lorem id sagittis fermentum. </p>

<!-- right-floated unordered list -->
    <figure class="code_center code_center-extra">
        <pre><code class="language-markup"> 
    &lt;ul class=&quot;list_right&quot;&gt;
        &lt;li&gt;Lorem ipsum dolor sit amet consectetuer.&lt;/li&gt;
        &lt;li&gt;Aenean commodo ligula eget dolor.&lt;/li&gt;
        &lt;li&gt;Aenean massa cum sociis natoque penatibus.&lt;/li&gt;
    &lt;/ul&gt;    
        </code></pre>
        <figcaption>Right-floated unordered list</figcaption>
    </figure>
    <ul class="list_right" title="Right-floated unordered list">
        <li>Lorem ipsum dolor sit amet consectetuer.</li>
        <li>Aenean commodo ligula eget dolor.</li>
        <li>Aenean massa cum sociis natoque penatibus.</li>
        <li>Vestibulum ante ipsum primis in faucibus.</li>
        <li>Proin eu egestas metus, quis semper mauris.</li>
        <li>Cras arcu ligula, hendrerit ac tempus ac.</li>
    </ul>
    <p>Sed in mauris ultricies, euismod nisi a, pharetra est. Mauris vitae porta diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla malesuada posuere posuere. Nullam adipiscing lacinia odio, sed bibendum leo scelerisque id. Proin eu egestas metus, quis semper mauris. Cras arcu ligula, hendrerit ac tempus ac, porta nec odio. Pellentesque euismod lorem id sagittis fermentum. Donec id dictum tortor, ac tincidunt mi. Ut elementum hendrerit lectus, a viverra quam adipiscing eleifend. Pellentesque a libero ipsum.</p>

<!-- left-floated (with extra margin) ordered list -->
    <figure class="code_center code_center-extra">
        <pre><code class="language-markup"> 
    &lt;ol class=&quot;list_left list_left-extra&quot;&gt;
        &lt;li&gt;Lorem ipsum dolor sit amet, consectetuer adipiscing 
        elit.&lt;/li&gt;
        &lt;li&gt;Cum sociis natoque penatibus et magnis.&lt;/li&gt;
        &lt;li&gt;Nulla consequat massa quis enim.&lt;/li&gt;
    &lt;/ol&gt;     
        </code></pre>
        <figcaption>Left-floated ordered list with extra margin</figcaption>
    </figure>
    <ol class="list_left list_left-extra" title="Left-floated ordered list with extra margin">
        <li>Lorem ipsum dolor sit amet, consectetuer adipiscing 
        elit.</li>
        <li>Cum sociis natoque penatibus et magnis.</li>
        <li>Nulla consequat massa quis enim.</li>
    </ol>                       
    <p>Praesent commodo quam vel sem facilisis, non semper nisi malesuada. Ut vel blandit nunc. Nulla felis nunc, consectetur pharetra scelerisque nec, fermentum a odio. Quisque aliquet odio quis eros fringilla iaculis. Pellentesque euismod lorem id sagittis fermentum. Donec id dictum tortor, ac tincidunt mi. Ut elementum hendrerit lectus, a viverra quam adipiscing eleifend. Pellentesque a libero ipsum. </p>    

<!-- left-floated (with extra margin) unordered list -->
    <figure class="code_center code_center-extra">
        <pre><code class="language-markup"> 
    &lt;ul class=&quot;list_left list_left-extra&quot;&gt;
        &lt;li&gt;Lorem ipsum dolor sit amet consectetuer.&lt;/li&gt;
        &lt;li&gt;Aenean commodo ligula eget dolor.&lt;/li&gt;
        &lt;li&gt;Aenean massa cum sociis natoque penatibus.&lt;/li&gt;
    &lt;/ul&gt;        
        </code></pre>
        <figcaption>Left-floated unordered list with extra margin</figcaption>
    </figure>
    <ul class="list_left list_left-extra" title="Left-floated unordered list with extra margin">
        <li>Lorem ipsum dolor sit amet consectetuer.</li>
        <li>Aenean commodo ligula eget dolor.</li>
        <li>Aenean massa cum sociis natoque penatibus.</li>
        <li>Vestibulum ante ipsum primis in faucibus.</li>
        <li>Proin eu egestas metus, quis semper mauris.</li>
    </ul>           
    <p>Fusce vel magna commodo, sodales risus at, eleifend nibh. Nulla tristique metus eu ante elementum, sit amet tempor purus molestie. In luctus feugiat lacus sed lobortis. Suspendisse potenti. In sed magna ornare, aliquet ligula vitae, scelerisque ligula. Sed in mauris ultricies, euismod nisi a, pharetra est. Mauris vitae porta diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla malesuada posuere posuere. Nullam adipiscing lacinia odio, sed bibendum leo scelerisque id. Proin eu egestas metus, quis semper mauris. Cras arcu ligula, hendrerit ac tempus ac, porta nec odio. </p>

<!-- right-floated (with extra margin) ordered list -->
    <figure class="code_center code_center-extra">
        <pre><code class="language-markup"> 
    &lt;ol class=&quot;list_right list_right-extra&quot;&gt;
        &lt;li&gt;Lorem ipsum dolor sit amet, consectetuer adipiscing 
        elit.&lt;/li&gt;
        &lt;li&gt;Cum sociis natoque penatibus et magnis.&lt;/li&gt;
        &lt;li&gt;Nulla consequat massa quis enim.&lt;/li&gt;
    &lt;/ol&gt;        
        </code></pre>
        <figcaption>Right-floated ordered list with extra margin</figcaption>
    </figure>
    <ol class="list_right list_right-extra" title="Right-floated ordered list with extra margin">
        <li>Lorem ipsum dolor sit amet, consectetuer adipiscing 
        elit.</li>
        <li>Cum sociis natoque penatibus et magnis.</li>
        <li>Nulla consequat massa quis enim.</li>
    </ol>       
    <p>Praesent commodo quam vel sem facilisis, non semper nisi malesuada. Ut vel blandit nunc. Nulla felis nunc, consectetur pharetra scelerisque nec, fermentum a odio. Quisque aliquet odio quis eros fringilla iaculis. Pellentesque euismod lorem id sagittis fermentum. Donec id dictum tortor, ac tincidunt mi. Ut elementum hendrerit lectus, a viverra quam adipiscing eleifend. Pellentesque a libero ipsum. </p>

<!-- right-floated (with extra margin) unordered list -->
    <figure class="code_center code_center-extra">
        <pre><code class="language-markup"> 
    &lt;ul class=&quot;list_right list_right-extra&quot;&gt;
        &lt;li&gt;Lorem ipsum dolor sit amet consectetuer.&lt;/li&gt;
        &lt;li&gt;Aenean commodo ligula eget dolor.&lt;/li&gt;
        &lt;li&gt;Aenean massa cum sociis natoque penatibus.&lt;/li&gt;
    &lt;/ul&gt;        
        </code></pre>
        <figcaption>Right-floated unordered list with extra margin</figcaption>
    </figure>
    <ul class="list_right list_right-extra" title="Right-floated unordered list with extra margin">
        <li>Lorem ipsum dolor sit amet consectetuer.</li>
        <li>Aenean commodo ligula eget dolor.</li>
        <li>Aenean massa cum sociis natoque penatibus.</li>
        <li>Vestibulum ante ipsum primis in faucibus.</li>
        <li>Proin eu egestas metus, quis semper mauris.</li>
    </ul>           
    <p>Fusce vel magna commodo, sodales risus at, eleifend nibh. Nulla tristique metus eu ante elementum, sit amet tempor purus molestie. In luctus feugiat lacus sed lobortis. Suspendisse potenti. In sed magna ornare, aliquet ligula vitae, scelerisque ligula. Sed in mauris ultricies, euismod nisi a, pharetra est. Mauris vitae porta diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla malesuada posuere posuere. Nullam adipiscing lacinia odio, sed bibendum leo scelerisque id. Proin eu egestas metus, quis semper mauris. Cras arcu ligula, hendrerit ac tempus ac, porta nec odio. </p>            
</section>

<!-- Code blocks demo start -->
<section class="chapter" id="demo__code">
    <h3 class="typo_serif typo_center">Code blocks</h3>
    <p>Let's check code blocks, each of them represent their own markup with predefined classnames.</p>
<!-- left-floated code block -->
    <figure class="code_left">
        <pre><code class="language-markup"> 
    &lt;figure class=&quot;code_left&quot;&gt;
        &lt;pre&gt;&lt;code class=&quot;language-markup&quot;&gt; 
    &nbsp;               
        &lt;/code&gt;&lt;/pre&gt;
        &lt;figcaption&gt;Left-floated code block&lt;/figcaption&gt;
    &lt;/figure&gt;
        </code></pre>
        <figcaption>Left-floated code block</figcaption>
    </figure>
    <p>Praesent ante est, sollicitudin eu velit at, eleifend interdum ipsum. Duis et blandit metus. Fusce sed pellentesque turpis, eu faucibus mi. Nullam tempor nibh sit amet semper posuere. Cras in dignissim mi. Suspendisse id massa ac nisl posuere congue et in velit.</p>
    <p>Donec vitae semper ante, et placerat est. Vivamus adipiscing pulvinar purus. Suspendisse imperdiet nibh ac purus placerat sodales. Praesent vel molestie libero. Quisque gravida et leo ut placerat. Fusce vel magna commodo, sodales risus at, eleifend nibh. Nulla tristique metus eu ante elementum, sit amet tempor purus molestie. In luctus feugiat lacus sed lobortis.</p>

<!-- right-floated code block -->
    <figure class="code_right">
        <pre><code class="language-markup"> 
    &lt;figure class=&quot;code_right&quot;&gt;
        &lt;pre&gt;&lt;code class=&quot;language-markup&quot;&gt; 
    &nbsp;               
        &lt;/code&gt;&lt;/pre&gt;
        &lt;figcaption&gt;Right-floated code block&lt;/figcaption&gt;
    &lt;/figure&gt;
        </code></pre>
        <figcaption>Right-floated code block</figcaption>
    </figure>
    <p>Praesent ante est, sollicitudin eu velit at, eleifend interdum ipsum. Duis et blandit metus. Fusce sed pellentesque turpis, eu faucibus mi. Nullam tempor nibh sit amet semper posuere. Cras in dignissim mi. Suspendisse id massa ac nisl posuere congue et in velit.</p>
    <p>Donec vitae semper ante, et placerat est. Vivamus adipiscing pulvinar purus. Suspendisse imperdiet nibh ac purus placerat sodales. Praesent vel molestie libero. Quisque gravida et leo ut placerat. Fusce vel magna commodo, sodales risus at, eleifend nibh. Nulla tristique metus eu ante elementum, sit amet tempor purus molestie. In luctus feugiat lacus sed lobortis. Fusce vel magna commodo, sodales risus at, eleifend nibh. Nulla tristique metus eu ante elementum, sit amet tempor purus molestie. In luctus feugiat lacus sed lobortis.</p>

<!-- centered code block -->
    <figure class="code_center">
        <pre><code class="language-markup"> 
    &lt;figure class=&quot;code_center&quot;&gt;
        &lt;pre&gt;&lt;code class=&quot;language-markup&quot;&gt; 
    &nbsp;               
        &lt;/code&gt;&lt;/pre&gt;
        &lt;figcaption&gt;Centered code block&lt;/figcaption&gt;
    &lt;/figure&gt;
        </code></pre>
        <figcaption>Centered code block</figcaption>
    </figure>                       
    <p>Morbi adipiscing vehicula ante in condimentum. Sed id laoreet neque. Sed turpis neque, pharetra sed tortor id, tincidunt laoreet ipsum. Mauris vitae tincidunt dui. Integer at sollicitudin ligula. Donec venenatis mi ut varius porttitor. Mauris et cursus libero, ut consequat nisl. </p>

<!-- left-floated (with extra margin) code block -->
    <figure class="code_left code_left-extra">
        <pre><code class="language-markup"> 
    &lt;figure class=&quot;code_left code_left-extra&quot;&gt;
        &lt;pre&gt;&lt;code class=&quot;language-markup&quot;&gt; 
    &nbsp;               
        &lt;/code&gt;&lt;/pre&gt;
        &lt;figcaption&gt;Left-floated code block with extra margin&lt;/figcaption&gt;
    &lt;/figure&gt;
        </code></pre>
        <figcaption>Left-floated code block with extra margin</figcaption>
    </figure>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu augue sem. Sed eros tortor, rhoncus eget tortor at, adipiscing faucibus libero. Nullam eget neque sit amet eros sagittis venenatis. Nulla cursus metus in mattis consectetur. Cras nibh est, vestibulum vel imperdiet in, porttitor vel lectus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse sed pharetra tellus. Morbi et tellus iaculis, viverra nibh non, placerat diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce semper elementum mattis. Suspendisse vitae porta turpis. </p>

<!-- right-floated (with extra margin) code block -->
    <figure class="code_right code_right-extra">
        <pre><code class="language-markup"> 
    &lt;figure class=&quot;code_right code_right-extra&quot;&gt;
        &lt;pre&gt;&lt;code class=&quot;language-markup&quot;&gt; 
    &nbsp;               
        &lt;/code&gt;&lt;/pre&gt;
        &lt;figcaption&gt;Right-floated code block with extra margin&lt;/figcaption&gt;
    &lt;/figure&gt;
        </code></pre>
        <figcaption>Right-floated code block with extra margin</figcaption>
    </figure>
    <p> Morbi dictum lorem gravida massa scelerisque suscipit. Vestibulum euismod semper ante ac tempor. Phasellus aliquam dolor a massa vehicula dignissim. Nunc libero eros, viverra ut nisl pulvinar, convallis ultrices arcu. Donec non est tortor. Suspendisse mauris purus, mattis sit amet quam in, varius dapibus orci. Proin bibendum pretium dolor, sed consectetur tellus adipiscing non. Aliquam vitae purus ac turpis cursus luctus at ut sem.</p>
    <p>Integer sed risus dictum, pretium lorem ac, ultricies urna. Nulla ac sem malesuada, eleifend nibh non, suscipit elit. Quisque vitae orci gravida lacus posuere tempor. Phasellus est nisl, faucibus vel sapien vitae, auctor ultrices velit. Sed mollis urna mauris, vel sagittis velit dapibus in. Sed lorem nunc, pulvinar varius nunc at, dictum tincidunt felis. Vivamus egestas rutrum odio et viverra. Suspendisse mauris purus, mattis sit amet quam in, varius dapibus orci.</p>

<!-- centered extra margin code block -->
    <figure class="code_center code_center-extra">
        <pre><code class="language-markup"> 
    &lt;figure class=&quot;code_center code_center-extra&quot;&gt;
        &lt;pre&gt;&lt;code class=&quot;language-markup&quot;&gt; 
    &nbsp;               
        &lt;/code&gt;&lt;/pre&gt;
        &lt;figcaption&gt;Centered code block with extra margin&lt;/figcaption&gt;
    &lt;/figure&gt;
        </code></pre>
        <figcaption>Centered code block with extra margin</figcaption>
    </figure>
    <p>Morbi adipiscing vehicula ante in condimentum. Sed id laoreet neque. Sed turpis neque, pharetra sed tortor id, tincidunt laoreet ipsum. Mauris vitae tincidunt dui. Integer at sollicitudin ligula. Donec venenatis mi ut varius porttitor. Mauris et cursus libero, ut consequat nisl. </p>
</section>

<!-- Tables demo start -->
<section class="chapter" id="demo__tables">
    <h3 class="typo_serif typo_center">Tables</h3>

<!-- left-floated table -->
    <figure class="code_center code_center-extra">
        <pre><code class="language-markup">
    &lt;table class=&quot;table_left&quot;&gt;
        &lt;caption&gt;Left-floated table&lt;/caption&gt;
        &lt;tr&gt;
            &lt;th&gt;Entry Header 1&lt;/th&gt;
            &lt;th&gt;Entry Header 2&lt;/th&gt;
            &lt;th&gt;Entry Header 3&lt;/th&gt;
            &lt;th&gt;Entry Header 4&lt;/th&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
            &lt;td&gt;Entry First Line 1&lt;/td&gt;
            &lt;td&gt;Entry First Line 2&lt;/td&gt;
            &lt;td&gt;Entry First Line 3&lt;/td&gt;
            &lt;td&gt;Entry First Line 4&lt;/td&gt;
        &lt;/tr&gt;
    &lt;/table&gt;
        </code></pre>
        <figcaption>Left-floated table</figcaption>
    </figure>
    <table class="table_left" title="Left-floated table">
        <caption>Left-floated table</caption>
        <tr>
            <th>Entry Header 1</th>
            <th>Entry Header 2</th>
            <th>Entry Header 3</th>
            <th>Entry Header 4</th>
        </tr>
        <tr>
            <td>Entry First Line 1</td>
            <td>Entry First Line 2</td>
            <td>Entry First Line 3</td>
            <td>Entry First Line 4</td>
        </tr>
        <tr>
            <td>Entry Line 1</td>
            <td>Entry Line 2</td>
            <td>Entry Line 3</td>
            <td>Entry Line 4</td>
        </tr>                           
        <tr>
            <td>Entry Last Line 1</td>
            <td>Entry Last Line 2</td>
            <td>Entry Last Line 3</td>
            <td>Entry Last Line 4</td>
        </tr>
    </table>
    <p>Donec vitae semper ante, et placerat est. Vivamus adipiscing pulvinar purus. Suspendisse imperdiet nibh ac purus placerat sodales. Praesent vel molestie libero. Quisque gravida et leo ut placerat. Fusce vel magna commodo, sodales risus at, eleifend nibh. Nulla tristique metus eu ante elementum, sit amet tempor purus molestie. In luctus feugiat lacus sed lobortis. Fusce vel magna commodo, sodales risus at, eleifend nibh. Nulla tristique metus eu ante elementum, sit amet tempor purus molestie. In luctus feugiat lacus sed lobortis.</p>

<!-- right-floated table -->
    <figure class="code_center code_center-extra">
        <pre><code class="language-markup">
    &lt;table class=&quot;table_right&quot;&gt;
        &lt;caption&gt;Right-floated table&lt;/caption&gt;
        &lt;tr&gt;
            &lt;th&gt;Entry Header 1&lt;/th&gt;
            &lt;th&gt;Entry Header 2&lt;/th&gt;
            &lt;th&gt;Entry Header 3&lt;/th&gt;
            &lt;th&gt;Entry Header 4&lt;/th&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
            &lt;td&gt;Entry First Line 1&lt;/td&gt;
            &lt;td&gt;Entry First Line 2&lt;/td&gt;
            &lt;td&gt;Entry First Line 3&lt;/td&gt;
            &lt;td&gt;Entry First Line 4&lt;/td&gt;
        &lt;/tr&gt;
    &lt;/table&gt;
        </code></pre>
        <figcaption>Right-floated table</figcaption>
    </figure>    
    <table class="table_right" title="Right-floated table">
        <caption>Right-floated table</caption>
        <tr>
            <th>Entry Header 1</th>
            <th>Entry Header 2</th>
            <th>Entry Header 3</th>
            <th>Entry Header 4</th>
        </tr>
        <tr>
            <td>Entry First Line 1</td>
            <td>Entry First Line 2</td>
            <td>Entry First Line 3</td>
            <td>Entry First Line 4</td>
        </tr>
        <tr>
            <td>Entry Line 1</td>
            <td>Entry Line 2</td>
            <td>Entry Line 3</td>
            <td>Entry Line 4</td>
        </tr>                           
        <tr>
            <td>Entry Last Line 1</td>
            <td>Entry Last Line 2</td>
            <td>Entry Last Line 3</td>
            <td>Entry Last Line 4</td>
        </tr>
    </table>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu augue sem. Sed eros tortor, rhoncus eget tortor at, adipiscing faucibus libero. Nullam eget neque sit amet eros sagittis venenatis. Nulla cursus metus in mattis consectetur. Cras nibh est, vestibulum vel imperdiet in, porttitor vel lectus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse sed pharetra tellus. Morbi et tellus iaculis, viverra nibh non, placerat diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce semper elementum mattis. Suspendisse vitae porta turpis. </p>

<!-- centered full-width table -->
    <figure class="code_center code_center-extra">
        <pre><code class="language-markup">
    &lt;table class=&quot;table_center&quot;&gt;
        &lt;caption&gt;Centered full-width table&lt;/caption&gt;
        &lt;tr&gt;
            &lt;th&gt;Entry Header 1&lt;/th&gt;
            &lt;th&gt;Entry Header 2&lt;/th&gt;
            &lt;th&gt;Entry Header 3&lt;/th&gt;
            &lt;th&gt;Entry Header 4&lt;/th&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
            &lt;td&gt;Entry First Line 1&lt;/td&gt;
            &lt;td&gt;Entry First Line 2&lt;/td&gt;
            &lt;td&gt;Entry First Line 3&lt;/td&gt;
            &lt;td&gt;Entry First Line 4&lt;/td&gt;
        &lt;/tr&gt;
    &lt;/table&gt;
        </code></pre>
        <figcaption>Centered full-width table</figcaption>
    </figure>
    <table class="table_center" title="Centered full-width table">
        <caption>Centered full-width table</caption>
        <tr>
            <th>Entry Header 1</th>
            <th>Entry Header 2</th>
            <th>Entry Header 3</th>
            <th>Entry Header 4</th>
            <th>Entry Header 5</th>
        </tr>
        <tr>
            <td>Entry First Line 1</td>
            <td>Entry First Line 2</td>
            <td>Entry First Line 3</td>
            <td>Entry First Line 4</td>
            <td>Entry First Line 5</td>
        </tr>
        <tr>
            <td>Entry Line 1</td>
            <td>Entry Line 2</td>
            <td>Entry Line 3</td>
            <td>Entry Line 4</td>
            <td>Entry Line 5</td>
        </tr>
        <tr>
            <td>Entry Line 1</td>
            <td>Entry Line 2</td>
            <td>Entry Line 3</td>
            <td>Entry Line 4</td>
            <td>Entry Line 5</td>
        </tr>
        <tr>
            <td>Entry Line 1</td>
            <td>Entry Line 2</td>
            <td>Entry Line 3</td>
            <td>Entry Line 4</td>
            <td>Entry Line 5</td>
        </tr>
        <tr>
            <td>Entry Last Line 1</td>
            <td>Entry Last Line 2</td>
            <td>Entry Last Line 3</td>
            <td>Entry Last Line 4</td>
            <td>Entry Last Line 5</td>
        </tr>
    </table>                        
    <p>Praesent ante est, sollicitudin eu velit at, eleifend interdum ipsum. Duis et blandit metus. Fusce sed pellentesque turpis, eu faucibus mi. Nullam tempor nibh sit amet semper posuere. Cras in dignissim mi. Suspendisse id massa ac nisl posuere congue et in velit.</p>

<!-- left-floated (with extra margin) table -->
    <figure class="code_center code_center-extra">
        <pre><code class="language-markup">
    &lt;table class=&quot;table_left table_left-extra&quot;&gt;
        &lt;caption&gt;Left floated table with extra margin&lt;/caption&gt;
        &lt;tr&gt;
            &lt;th&gt;Entry Header 1&lt;/th&gt;
            &lt;th&gt;Entry Header 2&lt;/th&gt;
            &lt;th&gt;Entry Header 3&lt;/th&gt;
            &lt;th&gt;Entry Header 4&lt;/th&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
            &lt;td&gt;Entry First Line 1&lt;/td&gt;
            &lt;td&gt;Entry First Line 2&lt;/td&gt;
            &lt;td&gt;Entry First Line 3&lt;/td&gt;
            &lt;td&gt;Entry First Line 4&lt;/td&gt;
        &lt;/tr&gt;
    &lt;/table&gt;
        </code></pre>
        <figcaption>Left floated table with extra margin</figcaption>
    </figure>
    <table class="table_left table_left-extra" title="Left floated table with extra margin">
        <caption>Left floated table with extra margin</caption>
        <tr>
            <th>Entry Header 1</th>
            <th>Entry Header 2</th>
            <th>Entry Header 3</th>
            <th>Entry Header 4</th>
        </tr>
        <tr>
            <td>Entry First Line 1</td>
            <td>Entry First Line 2</td>
            <td>Entry First Line 3</td>
            <td>Entry First Line 4</td>
        </tr>
        <tr>
            <td>Entry Line 1</td>
            <td>Entry Line 2</td>
            <td>Entry Line 3</td>
            <td>Entry Line 4</td>
        </tr>                           
        <tr>
            <td>Entry Last Line 1</td>
            <td>Entry Last Line 2</td>
            <td>Entry Last Line 3</td>
            <td>Entry Last Line 4</td>
        </tr>
    </table>
    <p>Donec vitae semper ante, et placerat est. Vivamus adipiscing pulvinar purus. Suspendisse imperdiet nibh ac purus placerat sodales. Praesent vel molestie libero. Quisque gravida et leo ut placerat. Fusce vel magna commodo, sodales risus at, eleifend nibh. Nulla tristique metus eu ante elementum, sit amet tempor purus molestie. In luctus feugiat lacus sed lobortis. Fusce vel magna commodo, sodales risus at, eleifend nibh. Nulla tristique metus eu ante elementum, sit amet tempor purus molestie. In luctus feugiat lacus sed lobortis.</p>

<!-- right-floated (with extra margin) table -->
    <figure class="code_center code_center-extra">
        <pre><code class="language-markup">
    &lt;table class=&quot;table_right table_right-extra&quot;&gt;
        &lt;caption&gt;Right floated table with extra margin&lt;/caption&gt;
        &lt;tr&gt;
            &lt;th&gt;Entry Header 1&lt;/th&gt;
            &lt;th&gt;Entry Header 2&lt;/th&gt;
            &lt;th&gt;Entry Header 3&lt;/th&gt;
            &lt;th&gt;Entry Header 4&lt;/th&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
            &lt;td&gt;Entry First Line 1&lt;/td&gt;
            &lt;td&gt;Entry First Line 2&lt;/td&gt;
            &lt;td&gt;Entry First Line 3&lt;/td&gt;
            &lt;td&gt;Entry First Line 4&lt;/td&gt;
        &lt;/tr&gt;
    &lt;/table&gt;
        </code></pre>
        <figcaption>Right floated table with extra margin</figcaption>
    </figure>
    <table class="table_right table_right-extra" title="Right floated table with extra margin">
        <caption>Right floated table with extra margin</caption>
        <tr>
            <th>Entry Header 1</th>
            <th>Entry Header 2</th>
            <th>Entry Header 3</th>
            <th>Entry Header 4</th>
        </tr>
        <tr>
            <td>Entry First Line 1</td>
            <td>Entry First Line 2</td>
            <td>Entry First Line 3</td>
            <td>Entry First Line 4</td>
        </tr>
        <tr>
            <td>Entry Line 1</td>
            <td>Entry Line 2</td>
            <td>Entry Line 3</td>
            <td>Entry Line 4</td>
        </tr>                           
        <tr>
            <td>Entry Last Line 1</td>
            <td>Entry Last Line 2</td>
            <td>Entry Last Line 3</td>
            <td>Entry Last Line 4</td>
        </tr>
    </table>
    <p>Phasellus euismod neque at odio congue bibendum. Nam neque lectus, hendrerit nec ligula nec, feugiat tincidunt dolor. Maecenas id sem orci. Ut non velit est. Nullam et lectus in arcu rhoncus rutrum vitae vitae augue. Donec sodales risus auctor velit vulputate, vel elementum velit viverra. Nulla mattis scelerisque tellus eget malesuada. Donec tempus vulputate felis, id dictum odio euismod sit amet. </p>
    <p>Curabitur adipiscing leo eu ipsum rhoncus, quis imperdiet elit pretium. Praesent viverra nunc et justo commodo tincidunt. Mauris leo augue, fringilla vitae tempor in, facilisis in sapien. Integer dui sapien, placerat at orci sit amet, laoreet vestibulum nunc. Vestibulum nec placerat felis. Etiam blandit massa ac ligula aliquet pretium. Suspendisse potenti. Aliquam erat volutpat. Quisque id auctor felis. Proin sollicitudin euismod aliquam. </p>

<!-- centered full-width table with extra margin -->
    <figure class="code_center code_center-extra">
        <pre><code class="language-markup">
    &lt;table class=&quot;table_center table_center-extra&quot;&gt;
        &lt;caption&gt;Centered full-width table with extra margin&lt;/caption&gt;
        &lt;tr&gt;
            &lt;th&gt;Entry Header 1&lt;/th&gt;
            &lt;th&gt;Entry Header 2&lt;/th&gt;
            &lt;th&gt;Entry Header 3&lt;/th&gt;
            &lt;th&gt;Entry Header 4&lt;/th&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
            &lt;td&gt;Entry First Line 1&lt;/td&gt;
            &lt;td&gt;Entry First Line 2&lt;/td&gt;
            &lt;td&gt;Entry First Line 3&lt;/td&gt;
            &lt;td&gt;Entry First Line 4&lt;/td&gt;
        &lt;/tr&gt;
    &lt;/table&gt;
        </code></pre>
        <figcaption>Centered full-width table with extra margin</figcaption>
    </figure>       
    <table class="table_center table_center-extra" title="Centered full-width table with extra margin">
        <caption>Centered full-width table with extra margin</caption>
        <tr>
            <th>Entry Header 1</th>
            <th>Entry Header 2</th>
            <th>Entry Header 3</th>
            <th>Entry Header 4</th>
            <th>Entry Header 5</th>
        </tr>
        <tr>
            <td>Entry First Line 1</td>
            <td>Entry First Line 2</td>
            <td>Entry First Line 3</td>
            <td>Entry First Line 4</td>
            <td>Entry First Line 5</td>
        </tr>
        <tr>
            <td>Entry Line 1</td>
            <td>Entry Line 2</td>
            <td>Entry Line 3</td>
            <td>Entry Line 4</td>
            <td>Entry Line 5</td>
        </tr>
        <tr>
            <td>Entry Line 1</td>
            <td>Entry Line 2</td>
            <td>Entry Line 3</td>
            <td>Entry Line 4</td>
            <td>Entry Line 5</td>
        </tr>
        <tr>
            <td>Entry Line 1</td>
            <td>Entry Line 2</td>
            <td>Entry Line 3</td>
            <td>Entry Line 4</td>
            <td>Entry Line 5</td>
        </tr>
        <tr>
            <td>Entry Last Line 1</td>
            <td>Entry Last Line 2</td>
            <td>Entry Last Line 3</td>
            <td>Entry Last Line 4</td>
            <td>Entry Last Line 5</td>
        </tr>
    </table>
</section>

<!-- Blocks demo start -->
<section class="chapter" id="demo__blocks">
    <h3 class="typo_serif typo_center">Blocks</h3>
    <blockquote class="bq_align-center">
        <p>This inclusion was created as container for other page elements like widgets, complex blocks, media stuff, iframes or floated titles and also some nested things as container with titled lists or image galleries. Also this element have a spoiler option, that hide content under spoiler with title and icon. <br>
        This sounds good and it's really useful for some cases so let's see how we can do this.</p>
    </blockquote>

<!-- left-floated gist -->
    <figure class="code_center code_center-extra">
        <pre><code class="language-markup">
    &lt;div class=&quot;block_left&quot;&gt;
        &lt;h3 class=&quot;typo_center typo_condensed&quot;&gt;Bem-styled selectors gist&lt;/h3&gt;
        &lt;script src=&quot;https://gist.github.com/orlovmax/7dcb059b85c04c176a2a.js&quot;&gt;&lt;/script&gt;
    &lt;/div&gt;
        </code></pre>
        <figcaption>Left-floated gist from github within block</figcaption>
    </figure>
    <div class="block_left" title="Left-floated gist from github within block">
        <h3 class="typo_center typo_condensed">Bem-styled selectors gist</h3>
        <script src="https://gist.github.com/orlovmax/7dcb059b85c04c176a2a.js"></script>
    </div>
    <p>Curabitur adipiscing leo eu ipsum rhoncus, quis imperdiet elit pretium. Praesent viverra nunc et justo commodo tincidunt. Mauris leo augue, fringilla vitae tempor in, facilisis in sapien. Integer dui sapien, placerat at orci sit amet, laoreet vestibulum nunc. Vestibulum nec placerat felis. Etiam blandit massa ac ligula aliquet pretium. Suspendisse potenti. Aliquam erat volutpat. Quisque id auctor felis. Proin sollicitudin euismod aliquam. Nullam et lectus in arcu rhoncus rutrum vitae vitae augue.</p>
    <p> Morbi dictum lorem gravida massa scelerisque suscipit. Vestibulum euismod semper ante ac tempor. Phasellus aliquam dolor a massa vehicula dignissim. Nunc libero eros, viverra ut nisl pulvinar, convallis ultrices arcu. Donec non est tortor. Suspendisse mauris purus, mattis sit amet quam in, varius dapibus orci. Proin bibendum pretium dolor, sed consectetur tellus adipiscing non. Aliquam vitae purus ac turpis cursus luctus at ut sem.</p>

<!-- centered spoiler -->
    <figure class="code_center code_center-extra">
        <pre><code class="language-markup">
    &lt;div class=&quot;block_center block_spoiler js-spoiler&quot;&gt;
        &lt;a href=&quot;#&quot; class=&quot;js-panel&quot;&gt;Hidden table&lt;/a&gt;
        &lt;table class=&quot;table_center&quot;&gt;
            &lt;caption&gt;Centered full-width table&lt;/caption&gt;
            &lt;tr&gt;
                &lt;th&gt;Entry Header 1&lt;/th&gt;
                &lt;th&gt;Entry Header 2&lt;/th&gt;
                &lt;th&gt;Entry Header 3&lt;/th&gt;
                &lt;th&gt;Entry Header 4&lt;/th&gt;
                &lt;th&gt;Entry Header 5&lt;/th&gt;
            &lt;/tr&gt;
        &lt;/table&gt;
    &lt;/div&gt;            
        </code></pre>
        <figcaption>Hidden table</figcaption>
    </figure>   
    <div class="block_center block_spoiler js-spoiler" title="Скрытая под спойлер таблица">
        <a href="#" class="js-panel">Hidden table</a>
        <table class="table_center">
            <caption>Centered full-width table</caption>
            <tr>
                <th>Entry Header 1</th>
                <th>Entry Header 2</th>
                <th>Entry Header 3</th>
                <th>Entry Header 4</th>
                <th>Entry Header 5</th>
            </tr>
            <tr>
                <td>Entry First Line 1</td>
                <td>Entry First Line 2</td>
                <td>Entry First Line 3</td>
                <td>Entry First Line 4</td>
                <td>Entry First Line 5</td>
            </tr>
            <tr>
                <td>Entry Line 1</td>
                <td>Entry Line 2</td>
                <td>Entry Line 3</td>
                <td>Entry Line 4</td>
                <td>Entry Line 5</td>
            </tr>
            <tr>
                <td>Entry Last Line 1</td>
                <td>Entry Last Line 2</td>
                <td>Entry Last Line 3</td>
                <td>Entry Last Line 4</td>
                <td>Entry Last Line 5</td>
            </tr>
        </table>
    </div>
    <p>Curabitur adipiscing leo eu ipsum rhoncus, quis imperdiet elit pretium. Praesent viverra nunc et justo commodo tincidunt. Mauris leo augue, fringilla vitae tempor in, facilisis in sapien. Integer dui sapien, placerat at orci sit amet, laoreet vestibulum nunc. Vestibulum nec placerat felis. Etiam blandit massa ac ligula aliquet pretium. Suspendisse potenti. Aliquam erat volutpat. Quisque id auctor felis. Proin sollicitudin euismod aliquam. </p>

<!-- Right-floated thumbs -->
    <figure class="code_center code_center-extra">
        <pre><code class="language-markup">
    &lt;div class=&quot;block_right&quot;&gt;
        &lt;figure class=&quot;image_left&quot;&gt;
            &lt;img class=&quot;js-lazy js-view&quot; src=&quot;data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7&quot; data-src=&quot;/img/post/lorem/6.jpg&quot; alt=&quot;A lot of sand.&quot; /&gt;
            &lt;figcaption&gt;A lot of sand.&lt;/figcaption&gt;
        &lt;/figure&gt;                       
        &lt;figure class=&quot;image_left&quot;&gt;
            &lt;img class=&quot;js-lazy js-view&quot; src=&quot;data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7&quot; data-src=&quot;/img/post/lorem/7.jpg&quot; alt=&quot;Groningen&quot; /&gt;
            &lt;figcaption&gt;Groningen&lt;/figcaption&gt;
        &lt;/figure&gt;                           
    &lt;/div&gt;
        </code></pre>
        <figcaption>Right-floated thumbs within block</figcaption>
    </figure>
    <div class="block_right" title="Right-floated thumbs within block">
        <figure class="image_left">
            <img class="js-lazy js-view" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-src="/img/post/lorem/6.jpg" alt="A lot of sand." />
            <figcaption>A lot of sand.</figcaption>
        </figure>                       
        <figure class="image_left">
            <img class="js-lazy js-view" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-src="/img/post/lorem/7.jpg" alt="Groningen" />
            <figcaption>Groningen</figcaption>
        </figure>                           
    </div>                      
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>

<!-- right-floated spoiler -->
    <figure class="code_center code_center-extra">
        <pre><code class="language-markup">
    &lt;div class=&quot;block_right block_spoiler js-spoiler&quot;&gt;
        &lt;a href=&quot;#&quot; class=&quot;js-panel&quot;&gt;Hidden blockquote&lt;/a&gt;
        &lt;blockquote class=&quot;bq_align-left&quot;&gt;
            &lt;p&gt;Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.&lt;/p&gt;
            &lt;cite&gt;&lt;a rel=&quot;nofollow&quot; href=&quot;http://www.lipsum.com/&quot;&gt;Lorem Ipsum is simply dummy text of the printing and typesetting industry&lt;/a&gt;&lt;/cite&gt;
        &lt;/blockquote&gt;
    &lt;/div&gt;
        </code></pre>
        <figcaption>Right-floated blockquote under spoiler</figcaption>
    </figure>
    <div class="block_right block_spoiler js-spoiler" title="Right-floated blockquote under spoiler">
        <a href="#" class="js-panel">Hidden blockquote</a>
        <blockquote class="bq_align-left">
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
            <cite><a rel="nofollow" href="http://www.lipsum.com/">Lorem Ipsum is simply dummy text of the printing and typesetting industry</a></cite>
        </blockquote>
    </div>
    <p>Phasellus euismod neque at odio congue bibendum. Nam neque lectus, hendrerit nec ligula nec, feugiat tincidunt dolor. Maecenas id sem orci. Ut non velit est. Nullam et lectus in arcu rhoncus rutrum vitae vitae augue. Donec sodales risus auctor velit vulputate, vel elementum velit viverra. Nulla mattis scelerisque tellus eget malesuada. Donec tempus vulputate felis, id dictum odio euismod sit amet. </p>   

<!-- Left-floated subtitle -->
    <figure class="code_center code_center-extra">
        <pre><code class="language-markup">
    &lt;div class=&quot;block_left&quot;&gt;
        &lt;h3&gt;Left floated subtitle with sans-serif font&lt;/h3&gt;
    &lt;/div&gt;
        </code></pre>
        <figcaption>Left-floated subtitle within block</figcaption>
    </figure>
    <div class="block_left" title="Left-floated subtitle within block">
        <h3>Left floated subtitle with sans-serif font</h3>
    </div>
    <p>In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.</p>

<!-- left-floated spoiler -->
    <figure class="code_center code_center-extra">
        <pre><code class="language-markup">                           
    &lt;div class=&quot;block_left block_spoiler js-spoiler&quot;&gt;
        &lt;a href=&quot;#&quot; class=&quot;js-panel&quot;&gt;Hidden unordered list&lt;/a&gt;
        &lt;ul&gt;
            &lt;li&gt;Lorem ipsum dolor sit amet consectetuer.&lt;/li&gt;
            &lt;li&gt;Aenean commodo ligula eget dolor.&lt;/li&gt;
        &lt;/ul&gt;                           
    &lt;/div&gt;
        </code></pre>
        <figcaption>Right-floated titled list with extra margin within block</figcaption>
    </figure>                           
    <div class="block_left block_spoiler js-spoiler" title="Right-floated titled list with extra margin within block">
        <a href="#" class="js-panel">Hidden unordered list</a>
        <ul>
            <li>Lorem ipsum dolor sit amet consectetuer.</li>
            <li>Aenean commodo ligula eget dolor.</li>
        </ul>                           
    </div>  
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>

<!-- Right-floated list with title -->
    <figure class="code_center code_center-extra">
        <pre><code class="language-markup">
    &lt;div class=&quot;block_right block_right-extra&quot;&gt;
        &lt;h3 class=&quot;typo_right typo_condensed&quot;&gt;Titled list within right-floated block&lt;/h3&gt;
        &lt;ul&gt;
            &lt;li&gt;Lorem ipsum dolor sit amet consectetuer.&lt;/li&gt;
            &lt;li&gt;Aenean commodo ligula eget dolor.&lt;/li&gt;
            &lt;li&gt;Aenean massa cum sociis natoque penatibus.&lt;/li&gt;
            &lt;li&gt;Vestibulum ante ipsum primis in faucibus.&lt;/li&gt;
            &lt;li&gt;Proin eu egestas metus, quis semper mauris.&lt;/li&gt;
        &lt;/ul&gt;
    &lt;/div&gt;
        </code></pre>
        <figcaption>Right-floated titled list with extra margin within block</figcaption>
    </figure>
    <div class="block_right block_right-extra" title="Right-floated titled list with extra margin within block">
        <h3 class="typo_right typo_condensed">Titled list within right-floated block</h3>
        <ul>
            <li>Lorem ipsum dolor sit amet consectetuer.</li>
            <li>Aenean commodo ligula eget dolor.</li>
            <li>Aenean massa cum sociis natoque penatibus.</li>
            <li>Vestibulum ante ipsum primis in faucibus.</li>
            <li>Proin eu egestas metus, quis semper mauris.</li>
        </ul>
    </div>
    <p>Nam neque ipsum, varius ut lacus a, vehicula ultricies est. Phasellus fringilla porta leo, nec pretium ante lobortis nec. Nam aliquet, nisi vel sagittis facilisis, sem ipsum sollicitudin odio, ac sodales urna lorem non purus. Donec sodales ac turpis nec gravida. Aliquam laoreet in felis quis suscipit. Fusce ultrices felis ac nulla adipiscing tincidunt. Pellentesque a tristique metus, eu gravida nibh.</p>                     
    <p>Phasellus euismod neque at odio congue bibendum. Nam neque lectus, hendrerit nec ligula nec, feugiat tincidunt dolor. Maecenas id sem orci. Ut non velit est. Nullam et lectus in arcu rhoncus rutrum vitae vitae augue. </p>

<!-- right-floated (with extra margin) spoiler -->   
    <figure class="code_center code_center-extra">
        <pre><code class="language-markup">                      
    &lt;div class=&quot;block_right block_right-extra block_spoiler js-spoiler&quot;&gt;
        &lt;a href=&quot;#&quot; class=&quot;js-panel&quot;&gt;Hidden paragraph&lt;/a&gt;
        &lt;p&gt;Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. &lt;/p&gt;
    &lt;/div&gt;
        </code></pre>
        <figcaption>Right-floated paragraph under spoiler</figcaption>
    </figure>                      
    <div class="block_right block_right-extra block_spoiler js-spoiler" title="Right-floated paragraph under spoiler">
        <a href="#" class="js-panel">Hidden paragraph</a>
        <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. </p>
    </div>
    <p>In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.</p>

<!-- Left-floated (with extra margin) blockquote -->
    <figure class="code_center code_center-extra">
        <pre><code class="language-markup">
    &lt;div class=&quot;block_left block_left-extra&quot;&gt;
        &lt;blockquote class=&quot;bq_align-center&quot;&gt;
        &lt;p&gt;Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.&lt;/p&gt;
        &lt;cite&gt;&lt;a rel=&quot;nofollow&quot; href=&quot;http://www.lipsum.com/&quot;&gt;Lorem Ipsum is simply dummy text of the printing and typesetting industry&lt;/a&gt;&lt;/cite&gt;
    &lt;/blockquote&gt;
    &lt;/div&gt;
        </code></pre>
        <figcaption>Left-floated (with extra margin) blockquote within block</figcaption>
    </figure>
    <div class="block_left block_left-extra" title="Left-floated (with extra margin) blockquote within block">
        <blockquote class="bq_align-center">
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
        <cite><a rel="nofollow" href="http://www.lipsum.com/">Lorem Ipsum is simply dummy text of the printing and typesetting industry</a></cite>
    </blockquote>
    </div>
    <p>Vestibulum accumsan augue eu velit tempus consectetur. Praesent suscipit, velit a egestas euismod, massa nisi volutpat dolor, at feugiat nisi ligula id ligula. Nulla suscipit aliquet neque, tempus ultrices justo vehicula eget. Pellentesque congue sodales facilisis. Aliquam auctor convallis convallis. Donec bibendum orci eu magna ornare, vitae imperdiet purus commodo. Nunc in vestibulum mauris, vitae scelerisque ligula. Integer consequat nunc vel lacus dictum, porta consequat nunc feugiat. </p>                      
    <p>Phasellus euismod neque at odio congue bibendum. Nam neque lectus, hendrerit nec ligula nec, feugiat tincidunt dolor. Maecenas id sem orci. Ut non velit est. Nullam et lectus in arcu rhoncus rutrum vitae vitae augue. </p>

<!-- left-floated (with extra margin) spoiler --> 
    <figure class="code_center code_center-extra">
        <pre><code class="language-markup">                         
    &lt;div class=&quot;block_left block_left-extra block_spoiler js-spoiler&quot;&gt;
        &lt;a href=&quot;#&quot; class=&quot;js-panel&quot;&gt;Hidden image&lt;/a&gt;
        &lt;figure class=&quot;image_center&quot;&gt;
            &lt;img class=&quot;js-lazy js-view&quot; src=&quot;data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7&quot; data-src=&quot;/img/post/lorem/3.jpg&quot; alt=&quot;Lindesnes Fyr&quot; /&gt;
            &lt;figcaption&gt;Lindesnes Fyr&lt;/figcaption&gt;
        &lt;/figure&gt;                           
    &lt;/div&gt;
        </code></pre>
        <figcaption>Left-floated image under spoiler</figcaption>
    </figure>                         
    <div class="block_left block_left-extra block_spoiler js-spoiler" title="Left-floated image under spoiler">
        <a href="#" class="js-panel">Hidden image</a>
        <figure class="image_center">
            <img class="js-lazy js-view" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-src="/img/post/lorem/3.jpg" alt="Lindesnes Fyr" />
            <figcaption>Lindesnes Fyr</figcaption>
        </figure>                           
    </div>
    <p>Phasellus euismod neque at odio congue bibendum. Nam neque lectus, hendrerit nec ligula nec, feugiat tincidunt dolor. Maecenas id sem orci. Ut non velit est. Nullam et lectus in arcu rhoncus rutrum vitae vitae augue. Donec sodales risus auctor velit vulputate, vel elementum velit viverra. Nulla mattis scelerisque tellus eget malesuada. Donec tempus vulputate felis, id dictum odio euismod sit amet. </p>
</section>

<!-- Buttons demo -->
<section class="chapter" id="demo__buttons">
    <h3 class="typo_serif typo_center">Buttons</h3>
    <figure class="code_center code_center-extra">
        <pre><code class="language-markup">
    &lt;button type=&quot;button&quot; class=&quot;button button_center button_small&quot;&gt;Small button&lt;/button&gt;
    &lt;button type=&quot;button&quot; class=&quot;button button_center button_regular&quot;&gt;Regular button&lt;/button&gt;
    &lt;button type=&quot;button&quot; class=&quot;button button_center button_large&quot;&gt;Large button&lt;/button&gt; 
    &lt;button type=&quot;button&quot; class=&quot;button button_left button_regular&quot;&gt;Left-floated button&lt;/button&gt; 
    &lt;button type=&quot;button&quot; class=&quot;button button_right button_regular&quot;&gt;Right-floated button&lt;/button&gt;
    &lt;button type=&quot;button&quot; class=&quot;button button_center button_regular button_disabled&quot;&gt;Disabled button&lt;/button&gt;
        </code></pre>
    </figure>
    <button type="button" class="button button_center button_small" title="Small active button">Small button</button>
    <button type="button" class="button button_center button_regular" title="Regular active button">Regular button</button>
    <button type="button" class="button button_center button_large" title="Large active button">Large button</button>
    <p>Phasellus euismod neque at odio congue bibendum. Nam neque lectus, hendrerit nec ligula nec, feugiat tincidunt dolor. Maecenas id sem orci. Ut non velit est.</p>
    <button type="button" class="button button_left button_regular" title="Left-floated regular active button">Left-floated button</button>
    <p>Maecenas id sem orci. Ut non velit est. Nullam et lectus in arcu rhoncus rutrum vitae vitae augue. Donec sodales risus auctor velit vulputate, vel elementum velit viverra. Nulla mattis scelerisque tellus eget malesuada. </p>
    <button type="button" class="button button_right button_regular" title="Right-floated regular active button">Right-floated button</button>
    <p>Phasellus euismod neque at odio congue bibendum. Nam neque lectus, hendrerit nec ligula nec, feugiat tincidunt dolor. Maecenas id sem orci. Ut non velit est. Nullam et lectus in arcu rhoncus rutrum vitae vitae augue. Donec sodales risus auctor velit vulputate, vel elementum velit viverra. Nulla mattis scelerisque tellus eget malesuada. Donec tempus vulputate felis, id dictum odio euismod sit amet. </p>
    <button type="button" class="button button_center button_regular button_disabled" title="Regular disabled button">Disabled button</button>
</section>

<!-- Grid system demo -->
<section class="chapter" id="demo__grid">
    <h3 class="typo_serif typo_center">Grid</h3>
    <h4 class="typo_condensed typo_center">Fluid responsive grid example</h4>
    <div class="block_center block_center-extra block_spoiler js-spoiler">
        <a href="#" class="js-panel">Fluid responsive grid markup</a>
        <figure class="code_center">
            <pre><code class="language-markup">
    &lt;div class=&quot;demo_gs gs_container&quot;&gt;
        &lt;div class=&quot;gs_row&quot;&gt;                            
            &lt;div class=&quot;demo_col gs_col-1 gs-tablet_col-2 gs-mobile_col-3&quot;&gt;1&lt;/div&gt;
            &lt;div class=&quot;demo_col gs_col-1 gs-tablet_col-2 gs-mobile_col-3&quot;&gt;1&lt;/div&gt;
            &lt;div class=&quot;demo_col gs_col-1 gs-tablet_col-2 gs-mobile_col-3&quot;&gt;1&lt;/div&gt;
            &lt;div class=&quot;demo_col gs_col-1 gs-tablet_col-2 gs-mobile_col-3&quot;&gt;1&lt;/div&gt;
            &lt;div class=&quot;demo_col gs_col-1 gs-tablet_col-2 gs-mobile_col-3&quot;&gt;1&lt;/div&gt;
            &lt;div class=&quot;demo_col gs_col-1 gs-tablet_col-2 gs-mobile_col-3&quot;&gt;1&lt;/div&gt;
            &lt;div class=&quot;demo_col gs_col-1 gs-tablet_col-2 gs-mobile_col-3&quot;&gt;1&lt;/div&gt;
            &lt;div class=&quot;demo_col gs_col-1 gs-tablet_col-2 gs-mobile_col-3&quot;&gt;1&lt;/div&gt;
            &lt;div class=&quot;demo_col gs_col-1 gs-tablet_col-2 gs-mobile_col-3&quot;&gt;1&lt;/div&gt;
            &lt;div class=&quot;demo_col gs_col-1 gs-tablet_col-2 gs-mobile_col-3&quot;&gt;1&lt;/div&gt;
            &lt;div class=&quot;demo_col gs_col-1 gs-tablet_col-2 gs-mobile_col-3&quot;&gt;1&lt;/div&gt;
            &lt;div class=&quot;demo_col gs_col-1 gs-tablet_col-2 gs-mobile_col-3&quot;&gt;1&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class=&quot;gs_row&quot;&gt;
            &lt;div class=&quot;demo_col gs_col-2 gs-tablet_col-4&quot;&gt;2&lt;/div&gt;
            &lt;div class=&quot;demo_col gs_col-2 gs-tablet_col-4&quot;&gt;2&lt;/div&gt;
            &lt;div class=&quot;demo_col gs_col-2 gs-tablet_col-4&quot;&gt;2&lt;/div&gt;
            &lt;div class=&quot;demo_col gs_col-2 gs-tablet_col-4&quot;&gt;2&lt;/div&gt;
            &lt;div class=&quot;demo_col gs_col-2 gs-tablet_col-4&quot;&gt;2&lt;/div&gt;
            &lt;div class=&quot;demo_col gs_col-2 gs-tablet_col-4&quot;&gt;2&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class=&quot;gs_row&quot;&gt;
            &lt;div class=&quot;demo_col gs_col-3  gs-mobile_col-6&quot;&gt;3&lt;/div&gt;
            &lt;div class=&quot;demo_col gs_col-3  gs-mobile_col-6&quot;&gt;3&lt;/div&gt;
            &lt;div class=&quot;demo_col gs_col-3  gs-mobile_col-6&quot;&gt;3&lt;/div&gt;
            &lt;div class=&quot;demo_col gs_col-3  gs-mobile_col-6&quot;&gt;3&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class=&quot;gs_row&quot;&gt;
            &lt;div class=&quot;demo_col gs_col-4  gs-mobile_col-12&quot;&gt;4&lt;/div&gt;
            &lt;div class=&quot;demo_col gs_col-4  gs-mobile_col-12&quot;&gt;4&lt;/div&gt;
            &lt;div class=&quot;demo_col gs_col-4  gs-mobile_col-12&quot;&gt;4&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class=&quot;gs_row&quot;&gt;
            &lt;div class=&quot;demo_col gs_col-6  gs-mobile_col-12&quot;&gt;6&lt;/div&gt;
            &lt;div class=&quot;demo_col gs_col-6  gs-mobile_col-12&quot;&gt;6&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class=&quot;gs_row&quot;&gt;
            &lt;div class=&quot;demo_col gs_col-12&quot;&gt;12&lt;/div&gt;
        &lt;/div&gt;                          
    &lt;/div&gt;    
            </code></pre>
        </figure>
    </div>    
    <div class="demo_gs gs_container">
        <div class="gs_row">                            
            <div class="demo_col gs_col-1 gs-tablet_col-2  gs-mobile_col-3">1</div>
            <div class="demo_col gs_col-1 gs-tablet_col-2  gs-mobile_col-3">1</div>
            <div class="demo_col gs_col-1 gs-tablet_col-2  gs-mobile_col-3">1</div>
            <div class="demo_col gs_col-1 gs-tablet_col-2  gs-mobile_col-3">1</div>
            <div class="demo_col gs_col-1 gs-tablet_col-2  gs-mobile_col-3">1</div>
            <div class="demo_col gs_col-1 gs-tablet_col-2  gs-mobile_col-3">1</div>
            <div class="demo_col gs_col-1 gs-tablet_col-2  gs-mobile_col-3">1</div>
            <div class="demo_col gs_col-1 gs-tablet_col-2  gs-mobile_col-3">1</div>
            <div class="demo_col gs_col-1 gs-tablet_col-2  gs-mobile_col-3">1</div>
            <div class="demo_col gs_col-1 gs-tablet_col-2  gs-mobile_col-3">1</div>
            <div class="demo_col gs_col-1 gs-tablet_col-2  gs-mobile_col-3">1</div>
            <div class="demo_col gs_col-1 gs-tablet_col-2  gs-mobile_col-3">1</div>
        </div>
        <div class="gs_row">
            <div class="demo_col gs_col-2 gs-tablet_col-4">2</div>
            <div class="demo_col gs_col-2 gs-tablet_col-4">2</div>
            <div class="demo_col gs_col-2 gs-tablet_col-4">2</div>
            <div class="demo_col gs_col-2 gs-tablet_col-4">2</div>
            <div class="demo_col gs_col-2 gs-tablet_col-4">2</div>
            <div class="demo_col gs_col-2 gs-tablet_col-4">2</div>
        </div>
        <div class="gs_row">
            <div class="demo_col gs_col-3  gs-mobile_col-6">3</div>
            <div class="demo_col gs_col-3  gs-mobile_col-6">3</div>
            <div class="demo_col gs_col-3  gs-mobile_col-6">3</div>
            <div class="demo_col gs_col-3  gs-mobile_col-6">3</div>
        </div>
        <div class="gs_row">
            <div class="demo_col gs_col-4  gs-mobile_col-12">4</div>
            <div class="demo_col gs_col-4  gs-mobile_col-12">4</div>
            <div class="demo_col gs_col-4  gs-mobile_col-12">4</div>
        </div>
        <div class="gs_row">
            <div class="demo_col gs_col-6  gs-mobile_col-12">6</div>
            <div class="demo_col gs_col-6  gs-mobile_col-12">6</div>
        </div>
        <div class="gs_row">
            <div class="demo_col gs_col-12">12</div>
        </div>                          
    </div>
    <h4 class="typo_condensed typo_center">Fluid grid with pushed and pulled columns</h4>
    <div class="block_center block_center-extra block_spoiler js-spoiler">
        <a href="#" class="js-panel">Fluid grid markup</a>
        <figure class="code_center">
            <pre><code class="language-markup">
    &lt;div class=&quot;demo_gs gs_container&quot;&gt;
        &lt;div class=&quot;gs_row&quot;&gt;                            
            &lt;div class=&quot;demo_col gs_col-1&quot;&gt;1&lt;/div&gt;
            &lt;div class=&quot;demo_col gs_col-1&quot;&gt;1&lt;/div&gt;
            &lt;div class=&quot;demo_col gs_col-1&quot;&gt;1&lt;/div&gt;
            &lt;div class=&quot;demo_col gs_col-1&quot;&gt;1&lt;/div&gt;
            &lt;div class=&quot;demo_col gs_col-1 gs_push-4&quot;&gt;1&lt;/div&gt;
            &lt;div class=&quot;demo_col gs_col-1&quot;&gt;1&lt;/div&gt;
            &lt;div class=&quot;demo_col gs_col-1&quot;&gt;1&lt;/div&gt;
            &lt;div class=&quot;demo_col gs_col-1&quot;&gt;1&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class=&quot;gs_row&quot;&gt;
            &lt;div class=&quot;demo_col gs_col-2 gs_push-2&quot;&gt;2&lt;/div&gt;
            &lt;div class=&quot;demo_col gs_col-2 gs_push-1 gs_pull-1&quot;&gt;2&lt;/div&gt;
            &lt;div class=&quot;demo_col gs_col-2&quot;&gt;2&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class=&quot;gs_row&quot;&gt;
            &lt;div class=&quot;demo_col gs_col-3 gs_push-3&quot;&gt;3&lt;/div&gt;
            &lt;div class=&quot;demo_col gs_col-3&quot;&gt;3&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class=&quot;gs_row&quot;&gt;
            &lt;div class=&quot;demo_col gs_col-4 gs_pull-4&quot;&gt;4&lt;/div&gt;
            &lt;div class=&quot;demo_col gs_col-4&quot;&gt;4&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class=&quot;gs_row&quot;&gt;
            &lt;div class=&quot;demo_col gs_col-6 gs_push-3&quot;&gt;6&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class=&quot;gs_row&quot;&gt;
            &lt;div class=&quot;demo_col gs_col-12&quot;&gt;12&lt;/div&gt;
        &lt;/div&gt;                          
    &lt;/div&gt;    
            </code></pre>
        </figure>
    </div>
    <div class="demo_gs gs_container">
        <div class="gs_row">                            
            <div class="demo_col gs_col-1">1</div>
            <div class="demo_col gs_col-1">1</div>
            <div class="demo_col gs_col-1">1</div>
            <div class="demo_col gs_col-1">1</div>
            <div class="demo_col gs_col-1 gs_push-4">1</div>
            <div class="demo_col gs_col-1">1</div>
            <div class="demo_col gs_col-1">1</div>
            <div class="demo_col gs_col-1">1</div>
        </div>
        <div class="gs_row">
            <div class="demo_col gs_col-2 gs_push-2">2</div>
            <div class="demo_col gs_col-2 gs_push-1 gs_pull-1">2</div>
            <div class="demo_col gs_col-2">2</div>
        </div>
        <div class="gs_row">
            <div class="demo_col gs_col-3 gs_push-3">3</div>
            <div class="demo_col gs_col-3">3</div>
        </div>
        <div class="gs_row">
            <div class="demo_col gs_col-4 gs_pull-4">4</div>
            <div class="demo_col gs_col-4">4</div>
        </div>
        <div class="gs_row">
            <div class="demo_col gs_col-6 gs_push-3">6</div>
        </div>
        <div class="gs_row">
            <div class="demo_col gs_col-12">12</div>
        </div>                          
    </div>                      
</section>

<h2 class="typo_center">Conclusion</h2>
<p>We've checked styling content with <span class="inclusion">Inclusion</span> framework. Of course for common post you can use only markdown syntax without html inclusion. By the way, for default markdown for this blog is kramdown, so you're able to add desired classname right to the markdown element, like this: {: class="typo_serif typo_center"} More details you can find <a href="http://kramdown.gettalong.org/quickref.html" rel="nofollow">here</a> and <a href="http://kramdown.gettalong.org/syntax.html" rel="nofollow">here</a>.  Ok, I think that's all, thank you for watching and have a nice blogging ;)</p>