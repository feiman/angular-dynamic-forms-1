angular.module("app").run(["$templateCache", function($templateCache) {$templateCache.put("/app/views/views/home.html","<h1>Getting Started</h1>\r\nDynamic forms is an Angular JS module that allows you to dynamic generate a HTML form based off of standard <a href=\"http://json-schema.org\" target=\"_blankd\">JSON schema</a> complete with support for the following:\r\n<ul>\r\n    <li>Form Validation</li>\r\n    <li>Extensible and customizable template driven design</li>\r\n    <li>Default templates leverage bootstrap, but can be fully customized</li>\r\n</ul>\r\n<h2>Installation</h2>\r\n<h4>Install with bower</h4>\r\n<code>\r\n    $ bower install angular-dynamic-forms\r\n</code>\r\n<h4>Add script reference to your app</h4>\r\n<code>\r\n    &lt;script type=&quot;text/javascript&quot; src=&quot;bower_components/dist/dynamic-forms.js&quot;&gt;&lt;/script&gt;\r\n</code>\r\n<h4>Add Angular Reference</h4>\r\n<code>\r\n    angular.module(\'myApp\', [\'dynamic-forms\']);\r\n</code>\r\n<h4>\r\n    Add dynamic-form directive to your view\r\n</h4>\r\n<code>\r\n    &lt;dynamic-form schema=&quot;formSchema&quot; ng-model=&quot;formModel&quot;&gt;&lt;/dynamic-form&gt;\r\n</code>\r\n<h3>Basic Example</h3>\r\n<h5>JavaScript</h5>\r\n<pre>\r\n(function () {\r\n    &#39;use strict&#39;;\r\n\r\n    angular.module(&#39;app&#39;)\r\n        .controller(&#39;homeController&#39;, [&#39;$scope&#39;, HomeController]);\r\n\r\n    function HomeController() {\r\n        var vm = this;\r\n\r\n        vm.formSchema = {\r\n            type: &#39;object&#39;,\r\n            title: &#39;Basic Example&#39;,\r\n            description: &#39;Example description for angular dynamic form&#39;,\r\n            properties: {\r\n                firstName: { type: &#39;string&#39;, title: &#39;First Name&#39;, description: &#39;Your first name&#39;, required: true },\r\n                lastName: { type: &#39;string&#39;, title: &#39;Last Name&#39;, description: &#39;Your last name&#39;, required: true },\r\n                email: { type: &#39;string&#39;, format: &#39;email&#39;, title: &#39;E-mail&#39;, description: &#39;Your email address&#39;, required: true }\r\n            }\r\n        };\r\n\r\n        vm.formModel = {\r\n            firstName: &#39;John&#39;,\r\n            lastName: &#39;Doe&#39;,\r\n            email: &#39;john.doe@gmail.com&#39;\r\n        };\r\n    }\r\n}());\r\n</pre>\r\n<h5>HTML</h5>\r\n<pre>\r\n&lt;div ng-controller=&quot;demoController as vm&quot;&gt;\r\n    &lt;dynamic-form schema=&quot;home.formSchema&quot; ng-model=&quot;home.formModel&quot;&gt;\r\n        &lt;button type=&quot;button&quot; class=&quot;btn btn-success&quot;&gt;Submit&lt;/button&gt;\r\n        &lt;button type=&quot;button&quot; class=&quot;btn btn-danger&quot;&gt;Cancel&lt;/button&gt;\r\n    &lt;/dynamic-form&gt;\r\n&lt;/div&gt;\r\n</pre>\r\n<h5>Generated Example</h5>\r\n<dynamic-form schema=\"home.formSchema\" ng-model=\"home.formModel\">\r\n    <button type=\"button\" class=\"btn btn-success\">Submit</button>\r\n    <button type=\"button\" class=\"btn btn-danger\">Cancel</button>\r\n</dynamic-form>");}]);