(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(t){t.exports=[{id:1,image:"https://www.nba.com/raptors/sites/raptors/files/getty-images-955773844.jpg",count:0},{id:2,image:"https://www.nba.com/raptors/sites/raptors/files/getty-images-955779446.jpg",count:0},{id:3,image:"https://www.nba.com/raptors/sites/raptors/files/getty-images-955782606.jpg",count:0},{id:4,image:"https://www.nba.com/raptors/sites/raptors/files/getty-images-955778682.jpg",count:0},{id:5,name:"Jonas Valanciunas",image:"https://www.nba.com/raptors/sites/raptors/files/getty-images-955779436.jpg",count:0},{id:6,name:"DeMar DeRozan",image:"https://www.nba.com/raptors/sites/raptors/files/getty-images-955782596.jpg",count:0},{id:7,image:"https://www.nba.com/raptors/sites/raptors/files/getty-images-955782596.jpg",count:0},{id:8,name:"Fred VanVleet",image:"https://www.nba.com/raptors/sites/raptors/files/getty-images-955782514.jpg",count:0},{id:9,image:"https://www.nba.com/raptors/sites/raptors/files/getty-images-955121650.jpg",count:0},{id:10,image:"https://www.nba.com/raptors/sites/raptors/files/getty-images-943493572.jpg",count:0},{id:11,image:"https://toronto.citynews.ca/wp-content/blogs.dir/sites/10/2019/05/30/21187076.jpg",count:0},{id:12,image:"https://i1.wp.com/multifiles.pressherald.com/uploads/sites/10/2019/06/AP_19154055303316.jpg?fit=1024%2C683&ssl=1",count:0}]},,,,,,,,function(t,e,s){t.exports=s(20)},,,,,,function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){"use strict";s.r(e);var a=s(0),r=s.n(a),n=s(3),i=s.n(n),c=s(4),o=s(5),m=s(7),g=s(6),u=s(8),p=(s(15),function(t){return r.a.createElement("div",{className:"card",onClick:function(){return t.clickCount(t.id)}},r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{alt:t.name,src:t.image})))}),l=(s(16),function(t){return r.a.createElement("div",{className:"wrapper"},t.children)}),h=(s(17),function(t){return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"title"},t.children),r.a.createElement("div",{className:"scores"},"Score: ",t.score," Highscore: ",t.highscore))}),d=s(1),w=(s(18),function(t){function e(){var t,s;Object(c.a)(this,e);for(var a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return(s=Object(m.a)(this,(t=Object(g.a)(e)).call.apply(t,[this].concat(r)))).state={cards:d,score:0,highscore:0},s.gameOver=function(){return s.state.score>s.state.highscore&&s.setState({highscore:s.state.score},function(){console.log(this.state.highscore)}),s.state.cards.forEach(function(t){t.count=0}),alert("Game Over :( \nscore: ".concat(s.state.score)),s.setState({score:0}),!0},s.clickCount=function(t){s.state.cards.find(function(e,a){if(e.id===t){if(0===d[a].count)return d[a].count=d[a].count+1,s.setState({score:s.state.score+1},function(){console.log(this.state.score)}),s.state.cards.sort(function(){return Math.random()-.5}),!0;s.gameOver()}return!1})},s}return Object(u.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){var t=this;return r.a.createElement(l,null,r.a.createElement(h,{score:this.state.score,highscore:this.state.highscore},'clicky "Rapt',this.state.highscore,'rs" game'),this.state.cards.map(function(e){return r.a.createElement(p,{clickCount:t.clickCount,id:e.id,key:e.id,image:e.image})}))}}]),e}(a.Component));s(19);i.a.render(r.a.createElement(w,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.120468bf.chunk.js.map