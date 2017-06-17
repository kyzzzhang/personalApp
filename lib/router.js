Router.configure({layoutTemplate: 'layout',})
Router.route('/',{name:'main'});
Router.route('info');
Router.route('quiz1');
Router.route('abc/def/about',{name:'about'});
