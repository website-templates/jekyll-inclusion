---
layout: post
title: "Demo post &mdash; blocks"
description: "This is the seventh post with tests and demo for blocks with code snippets and explanations"
date: 2015-01-13
tags: 
- Lorem ipsum
- test 
- demo
- page elements
- blocks
category:
- technologies
start_img: "static/images/post/2015-01-13-demo-post-blocks/meta/common-6.jpg"
thumb_img: "static/images/post/2015-01-13-demo-post-blocks/meta/cm-6.jpg"
comments: true
---
<h3 class="typo typo_serif typo_center">Blocks</h3>
<blockquote class="bq bq_align-center">
    <p>This inclusion was created as container for other page elements like widgets, complex blocks, media stuff, iframes or floated titles and also some nested things as container with titled lists or image galleries. Also this element have a spoiler option, that hide content under spoiler with title and icon. <br>
    This sounds good and it's really useful for some cases so let's see how we can do this.</p>
</blockquote>

<!-- left-floated gist -->

<figure class="code code_center code_center-extra">
    <pre><code class="language-markup">
    &lt;div class=&quot;block block_left&quot;&gt;
        &lt;h3 class=&quot;typo typo_center typo_condensed&quot;&gt;Bem-styled selectors gist&lt;/h3&gt;
        &lt;script src=&quot;https://gist.github.com/orlovmax/7dcb059b85c04c176a2a.js&quot;&gt;&lt;/script&gt;
    &lt;/div&gt;
    </code></pre>
    <figcaption>Left-floated gist from github within block</figcaption>
</figure>
<div class="block block_left" title="Left-floated gist from github within block">
    <h3 class="typo typo_center typo_condensed">Bem-styled selectors gist</h3>
    <script src="https://gist.github.com/orlovmax/7dcb059b85c04c176a2a.js"></script>
</div>
<p>Curabitur adipiscing leo eu ipsum rhoncus, quis imperdiet elit pretium. Praesent viverra nunc et justo commodo tincidunt. Mauris leo augue, fringilla vitae tempor in, facilisis in sapien. Integer dui sapien, placerat at orci sit amet, laoreet vestibulum nunc. Vestibulum nec placerat felis. Etiam blandit massa ac ligula aliquet pretium. Suspendisse potenti. Aliquam erat volutpat. Quisque id auctor felis. Proin sollicitudin euismod aliquam. Nullam et lectus in arcu rhoncus rutrum vitae vitae augue.</p>
<p> Morbi dictum lorem gravida massa scelerisque suscipit. Vestibulum euismod semper ante ac tempor. Phasellus aliquam dolor a massa vehicula dignissim. Nunc libero eros, viverra ut nisl pulvinar, convallis ultrices arcu. Donec non est tortor. Suspendisse mauris purus, mattis sit amet quam in, varius dapibus orci. Proin bibendum pretium dolor, sed consectetur tellus adipiscing non. Aliquam vitae purus ac turpis cursus luctus at ut sem.</p>

<!-- centered spoiler -->

<figure class="code code_center code_center-extra">
    <pre><code class="language-markup">
    &lt;div class=&quot;block block_center block_spoiler js-spoiler&quot;&gt;
        &lt;a href=&quot;#&quot; class=&quot;js-panel&quot;&gt;Hidden table&lt;/a&gt;
        &lt;table class=&quot;table table_center&quot;&gt;
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
<div class="block block_center block_spoiler js-spoiler" title="Скрытая под спойлер таблица">
    <a href="#" class="js-panel">Hidden table</a>
    <table class="table table_center">
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

<figure class="code code_center code_center-extra">
    <pre><code class="language-markup">
    &lt;div class=&quot;block block_right&quot;&gt;
        &lt;figure class=&quot;image image_left&quot;&gt;
            &lt;img class=&quot;js-lazy js-view&quot; src=&quot;data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7&quot; data-src=&quot;/static/images/post/2015-01-13-demo-post-blocks/6.jpg&quot; alt=&quot;A lot of sand.&quot; /&gt;
            &lt;figcaption&gt;A lot of sand.&lt;/figcaption&gt;
        &lt;/figure&gt;                       
        &lt;figure class=&quot;image image_left&quot;&gt;
            &lt;img class=&quot;js-lazy js-view&quot; src=&quot;data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7&quot; data-src=&quot;/static/images/post/2015-01-13-demo-post-blocks/7.jpg&quot; alt=&quot;Groningen&quot; /&gt;
            &lt;figcaption&gt;Groningen&lt;/figcaption&gt;
        &lt;/figure&gt;                           
    &lt;/div&gt;
    </code></pre>
    <figcaption>Right-floated thumbs within block</figcaption>
</figure>
<div class="block block_right" title="Right-floated thumbs within block">
    <figure class="image image_left">
        <img class="js-lazy js-view" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-src="{{ site.baseurl }}/static/images/post/2015-01-13-demo-post-blocks/6.jpg" alt="A lot of sand." />
        <figcaption>A lot of sand.</figcaption>
    </figure>                       
    <figure class="image image_left">
        <img class="js-lazy js-view" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-src="{{ site.baseurl }}/static/images/post/2015-01-13-demo-post-blocks/7.jpg" alt="Groningen" />
        <figcaption>Groningen</figcaption>
    </figure>                           
</div>                      
<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>

<!-- right-floated spoiler -->

<figure class="code code_center code_center-extra">
    <pre><code class="language-markup">
    &lt;div class=&quot;block block_right block_spoiler js-spoiler&quot;&gt;
        &lt;a href=&quot;#&quot; class=&quot;js-panel&quot;&gt;Hidden blockquote&lt;/a&gt;
        &lt;blockquote class=&quot;bq bq_align-left&quot;&gt;
            &lt;p&gt;Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.&lt;/p&gt;
            &lt;cite&gt;&lt;a rel=&quot;nofollow&quot; href=&quot;http://www.lipsum.com/&quot;&gt;Lorem Ipsum is simply dummy text of the printing and typesetting industry&lt;/a&gt;&lt;/cite&gt;
        &lt;/blockquote&gt;
    &lt;/div&gt;
    </code></pre>
    <figcaption>Right-floated blockquote under spoiler</figcaption>
</figure>
<div class="block block_right block_spoiler js-spoiler" title="Right-floated blockquote under spoiler">
    <a href="#" class="js-panel">Hidden blockquote</a>
    <blockquote class="bq bq_align-left">
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
        <cite><a rel="nofollow" href="http://www.lipsum.com/">Lorem Ipsum is simply dummy text of the printing and typesetting industry</a></cite>
    </blockquote>
</div>
<p>Phasellus euismod neque at odio congue bibendum. Nam neque lectus, hendrerit nec ligula nec, feugiat tincidunt dolor. Maecenas id sem orci. Ut non velit est. Nullam et lectus in arcu rhoncus rutrum vitae vitae augue. Donec sodales risus auctor velit vulputate, vel elementum velit viverra. Nulla mattis scelerisque tellus eget malesuada. Donec tempus vulputate felis, id dictum odio euismod sit amet. </p>   

<!-- Left-floated subtitle -->

<figure class="code code_center code_center-extra">
    <pre><code class="language-markup">
    &lt;div class=&quot;block block_left&quot;&gt;
        &lt;h3&gt;Left floated subtitle with sans-serif font&lt;/h3&gt;
    &lt;/div&gt;
    </code></pre>
    <figcaption>Left-floated subtitle within block</figcaption>
</figure>
<div class="block block_left" title="Left-floated subtitle within block">
    <h3>Left floated subtitle with sans-serif font</h3>
</div>
<p>In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.</p>

<!-- left-floated spoiler -->

<figure class="code code_center code_center-extra">
    <pre><code class="language-markup">                           
    &lt;div class=&quot;block block_left block_spoiler js-spoiler&quot;&gt;
        &lt;a href=&quot;#&quot; class=&quot;js-panel&quot;&gt;Hidden unordered list&lt;/a&gt;
        &lt;ul class=&quot;list&quot;&gt;
            &lt;li&gt;Lorem ipsum dolor sit amet consectetuer.&lt;/li&gt;
            &lt;li&gt;Aenean commodo ligula eget dolor.&lt;/li&gt;
        &lt;/ul&gt;                           
    &lt;/div&gt;
    </code></pre>
    <figcaption>Right-floated titled list with extra margin within block</figcaption>
</figure>                           
<div class="block block_left block_spoiler js-spoiler" title="Right-floated titled list with extra margin within block">
    <a href="#" class="js-panel">Hidden unordered list</a>
    <ul class="list">
        <li>Lorem ipsum dolor sit amet consectetuer.</li>
        <li>Aenean commodo ligula eget dolor.</li>
    </ul>                           
</div>  
<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>

<!-- Right-floated list with title -->

<figure class="code code_center code_center-extra">
    <pre><code class="language-markup">
    &lt;div class=&quot;block block_right block_right-extra&quot;&gt;
        &lt;h3 class=&quot;typo typo_right typo_condensed&quot;&gt;Titled list within right-floated block&lt;/h3&gt;
        &lt;ul class=&quot;list&quot;&gt;
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
<div class="block block_right block_right-extra" title="Right-floated titled list with extra margin within block">
    <h3 class="typo typo_right typo_condensed">Titled list within right-floated block</h3>
    <ul class="list">
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

<figure class="code code_center code_center-extra">
    <pre><code class="language-markup">                      
    &lt;div class=&quot;block block_right block_right-extra block_spoiler js-spoiler&quot;&gt;
        &lt;a href=&quot;#&quot; class=&quot;js-panel&quot;&gt;Hidden paragraph&lt;/a&gt;
        &lt;p&gt;Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. &lt;/p&gt;
    &lt;/div&gt;
    </code></pre>
    <figcaption>Right-floated paragraph under spoiler</figcaption>
</figure>                      
<div class="block block_right block_right-extra block_spoiler js-spoiler" title="Right-floated paragraph under spoiler">
    <a href="#" class="js-panel">Hidden paragraph</a>
    <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. </p>
</div>
<p>In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.</p>

<!-- Left-floated (with extra margin) blockquote -->

<figure class="code code_center code_center-extra">
    <pre><code class="language-markup">
    &lt;div class=&quot;block block_left block_left-extra&quot;&gt;
        &lt;blockquote class=&quot;bq bq_align-center&quot;&gt;
        &lt;p&gt;Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.&lt;/p&gt;
        &lt;cite&gt;&lt;a rel=&quot;nofollow&quot; href=&quot;http://www.lipsum.com/&quot;&gt;Lorem Ipsum is simply dummy text of the printing and typesetting industry&lt;/a&gt;&lt;/cite&gt;
    &lt;/blockquote&gt;
    &lt;/div&gt;
    </code></pre>
    <figcaption>Left-floated (with extra margin) blockquote within block</figcaption>
</figure>
<div class="block block_left block_left-extra" title="Left-floated (with extra margin) blockquote within block">
    <blockquote class="bq bq_align-center">
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
    <cite><a rel="nofollow" href="http://www.lipsum.com/">Lorem Ipsum is simply dummy text of the printing and typesetting industry</a></cite>
</blockquote>
</div>
<p>Vestibulum accumsan augue eu velit tempus consectetur. Praesent suscipit, velit a egestas euismod, massa nisi volutpat dolor, at feugiat nisi ligula id ligula. Nulla suscipit aliquet neque, tempus ultrices justo vehicula eget. Pellentesque congue sodales facilisis. Aliquam auctor convallis convallis. Donec bibendum orci eu magna ornare, vitae imperdiet purus commodo. Nunc in vestibulum mauris, vitae scelerisque ligula. Integer consequat nunc vel lacus dictum, porta consequat nunc feugiat. </p>                      
<p>Phasellus euismod neque at odio congue bibendum. Nam neque lectus, hendrerit nec ligula nec, feugiat tincidunt dolor. Maecenas id sem orci. Ut non velit est. Nullam et lectus in arcu rhoncus rutrum vitae vitae augue. </p>

<!-- left-floated (with extra margin) spoiler --> 

<figure class="code code_center code_center-extra">
    <pre><code class="language-markup">                         
    &lt;div class=&quot;block block_left block_left-extra block_spoiler js-spoiler&quot;&gt;
        &lt;a href=&quot;#&quot; class=&quot;js-panel&quot;&gt;Hidden image&lt;/a&gt;
        &lt;figure class=&quot;image image_center&quot;&gt;
            &lt;img class=&quot;js-lazy js-view&quot; src=&quot;data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7&quot; data-src=&quot;/static/images/post/2015-01-13-demo-post-blocks/3.jpg&quot; alt=&quot;Lindesnes Fyr&quot; /&gt;
            &lt;figcaption&gt;Lindesnes Fyr&lt;/figcaption&gt;
        &lt;/figure&gt;                           
    &lt;/div&gt;
    </code></pre>
    <figcaption>Left-floated image under spoiler</figcaption>
</figure>                         
<div class="block block_left block_left-extra block_spoiler js-spoiler" title="Left-floated image under spoiler">
    <a href="#" class="js-panel">Hidden image</a>
    <figure class="image image_center">
        <img class="js-lazy js-view" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-src="{{ site.baseurl }}/static/images/post/2015-01-13-demo-post-blocks/3.jpg" alt="Lindesnes Fyr" />
        <figcaption>Lindesnes Fyr</figcaption>
    </figure>                           
</div>
<p>Phasellus euismod neque at odio congue bibendum. Nam neque lectus, hendrerit nec ligula nec, feugiat tincidunt dolor. Maecenas id sem orci. Ut non velit est. Nullam et lectus in arcu rhoncus rutrum vitae vitae augue. Donec sodales risus auctor velit vulputate, vel elementum velit viverra. Nulla mattis scelerisque tellus eget malesuada. Donec tempus vulputate felis, id dictum odio euismod sit amet. </p>
