(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,t,a){},106:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){},109:function(e,t,a){},110:function(e,t,a){},111:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(20),c=a.n(r),i=(a(38),a(3)),s=a(4),o=a(6),m=a(5),u=a(7),d=(a(39),a(13)),f=a.n(d),C=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"fixed-action-btn"},n.a.createElement("a",{className:"btn-floating btn-large grey darken-4 hoverable pulse modal-trigger","aria-label":"Entrar em contato",href:"#Contact"},n.a.createElement("i",{className:"large material-icons"},"forum")))}}]),t}(n.a.Component),h=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={modalInstance:null},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=document.querySelectorAll(".modal");this.setState({modalInstance:f.a.Modal.init(e)})}},{key:"componentWillUnmount",value:function(){this.state.modalInstance.destroy()}},{key:"render",value:function(){return n.a.createElement("div",{id:"Contact",className:"modal"},n.a.createElement("div",{className:"modal-content"},n.a.createElement("h4",{className:"center blue-text"},"Entre em contato"),n.a.createElement("div",{className:"row",style:{marginTop:"2em"}},n.a.createElement("form",{className:"col s12"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"input-field col s12 m12 l12 lx12"},n.a.createElement("i",{className:"far fa-envelope prefix"}),n.a.createElement("input",{id:"icon_prefix",type:"email",readOnly:!0,value:"wesley.waaraujo@gmail.com",className:"validate"}),n.a.createElement("label",{htmlFor:"icon_prefix"},"Email")),n.a.createElement("div",{className:"input-field col s12 m12 l12 lx12"},n.a.createElement("i",{className:"fab fa-whatsapp prefix"}),n.a.createElement("input",{id:"icon_telephone",type:"tel",readOnly:!0,value:"+55 11 98919 7263",className:"validate"}),n.a.createElement("label",{htmlFor:"icon_telephone"},"Celular"))),n.a.createElement("small",null,'"Poderia ter um chat n\xe9?" Em breve.')))),n.a.createElement("div",{className:"modal-footer"},n.a.createElement("a",{href:"#!",className:"modal-close waves-effect waves-red btn-flat"},"Fechar")))}}]),t}(n.a.Component),E=(a(40),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={timerID:null},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=document.getElementById("TheTyperLogo"),t=!1,a=setInterval(function(){t?(e.style.fill="#2C98D4",t=!1):(e.style.fill="none",t=!0)},600);this.setState({timerID:a})}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.timerID)}},{key:"render",value:function(){return n.a.createElement("a",{className:"brand-logo leyd-brand-logo-navbar",title:"Logo Laydev",href:"#home"},n.a.createElement("svg",{className:"leyd-logo-navbar",viewBox:"0 0 199 49",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M16.4092 22.1309L0.271484 15.8076V11.1689L21.1211 20.3975V23.9619L0.271484 33.2148V28.5273L16.4092 22.1309Z",fill:"#2C98D4"}),n.a.createElement("path",{d:"M43.8506 38H39.334V0.5H43.8506V38ZM62.0635 38.4883C58.4827 38.4883 55.5693 37.3164 53.3232 34.9727C51.0771 32.6126 49.9541 29.4632 49.9541 25.5244V24.6943C49.9541 22.0739 50.4505 19.7383 51.4434 17.6875C52.4525 15.6204 53.8522 14.0091 55.6426 12.8535C57.4492 11.6816 59.4023 11.0957 61.502 11.0957C64.9362 11.0957 67.6055 12.2269 69.5098 14.4893C71.4141 16.7516 72.3662 19.9906 72.3662 24.2061V26.0859H54.4707C54.5358 28.6901 55.2926 30.7979 56.7412 32.4092C58.2061 34.0042 60.0615 34.8018 62.3076 34.8018C63.9027 34.8018 65.2536 34.4762 66.3604 33.8252C67.4671 33.1742 68.4355 32.3115 69.2656 31.2373L72.0244 33.3857C69.8109 36.7874 66.4906 38.4883 62.0635 38.4883ZM61.502 14.8066C59.679 14.8066 58.1491 15.474 56.9121 16.8086C55.6751 18.127 54.9102 19.9824 54.6172 22.375H67.8496V22.0332C67.7194 19.7383 67.1009 17.9642 65.9941 16.7109C64.8874 15.4414 63.39 14.8066 61.502 14.8066ZM85.916 31.3838L92.0684 11.584H96.9023L86.2822 42.0771C84.6383 46.4717 82.026 48.6689 78.4453 48.6689L77.5908 48.5957L75.9062 48.2783V44.6162L77.127 44.7139C78.6569 44.7139 79.8451 44.4046 80.6914 43.7861C81.554 43.1676 82.262 42.0365 82.8154 40.3926L83.8164 37.707L74.3926 11.584H79.3242L85.916 31.3838ZM99.5146 24.5723C99.5146 20.5195 100.475 17.2643 102.396 14.8066C104.316 12.3327 106.831 11.0957 109.939 11.0957C113.032 11.0957 115.481 12.1536 117.288 14.2695V0.5H121.805V38H117.654L117.435 35.168C115.628 37.3815 113.113 38.4883 109.891 38.4883C106.831 38.4883 104.332 37.235 102.396 34.7285C100.475 32.222 99.5146 28.9505 99.5146 24.9141V24.5723ZM104.031 25.085C104.031 28.0798 104.65 30.4235 105.887 32.1162C107.124 33.8089 108.833 34.6553 111.014 34.6553C113.878 34.6553 115.97 33.3695 117.288 30.7979V18.6641C115.937 16.1738 113.862 14.9287 111.062 14.9287C108.849 14.9287 107.124 15.7832 105.887 17.4922C104.65 19.2012 104.031 21.7321 104.031 25.085ZM139.798 38.4883C136.217 38.4883 133.304 37.3164 131.058 34.9727C128.812 32.6126 127.688 29.4632 127.688 25.5244V24.6943C127.688 22.0739 128.185 19.7383 129.178 17.6875C130.187 15.6204 131.587 14.0091 133.377 12.8535C135.184 11.6816 137.137 11.0957 139.236 11.0957C142.671 11.0957 145.34 12.2269 147.244 14.4893C149.148 16.7516 150.101 19.9906 150.101 24.2061V26.0859H132.205C132.27 28.6901 133.027 30.7979 134.476 32.4092C135.94 34.0042 137.796 34.8018 140.042 34.8018C141.637 34.8018 142.988 34.4762 144.095 33.8252C145.201 33.1742 146.17 32.3115 147 31.2373L149.759 33.3857C147.545 36.7874 144.225 38.4883 139.798 38.4883ZM139.236 14.8066C137.413 14.8066 135.883 15.474 134.646 16.8086C133.41 18.127 132.645 19.9824 132.352 22.375H145.584V22.0332C145.454 19.7383 144.835 17.9642 143.729 16.7109C142.622 15.4414 141.124 14.8066 139.236 14.8066ZM163.724 31.8721L170.267 11.584H174.881L165.408 38H161.966L152.396 11.584H157.01L163.724 31.8721Z",fill:"white"}),n.a.createElement("path",{id:"TheTyperLogo",d:"M198.27 41.6865H175.906V38H198.27V41.6865Z",fill:"none"})))}}]),t}(n.a.Component)),p=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={fixed:!0},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=n.a.createElement("nav",{className:"leyd-navbar grey darken-4"},n.a.createElement("div",{className:"nav-wrapper"},n.a.createElement(E,null),n.a.createElement("a",{href:"#!","data-target":"MenuMobile",className:"sidenav-trigger left"},n.a.createElement("i",{className:"material-icons"},"menu")),n.a.createElement("ul",{className:"right hide-on-med-and-down"},n.a.createElement("li",null,n.a.createElement("a",{href:"#howami",lang:"en"},"Who Am I")),n.a.createElement("li",null,n.a.createElement("a",{href:"#services"},"Servi\xe7os")),n.a.createElement("li",null,n.a.createElement("a",{href:"#portfolio"},"Portf\xf3lio")),n.a.createElement("li",null,n.a.createElement("a",{href:"#certificates"},"Certificados")),n.a.createElement("li",null,n.a.createElement("a",{href:"//www.linkedin.com/in/wesley-a",rel:"noopener noreferrer",target:"_blank","aria-label":"Perfil no linkdin"},n.a.createElement("i",{className:"fab fa-linkedin-in"}))),n.a.createElement("li",null,n.a.createElement("a",{href:"//github.com/leydev",rel:"noopener noreferrer",target:"_blank","aria-label":"Perfil no github"},n.a.createElement("i",{className:"fab fa-github"}))))));return this.state.fixed?n.a.createElement("div",{className:"navbar-fixed"},e):e}}]),t}(n.a.Component),v=a(16),b=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={sidenavInstance:null},a.onClickLink=a.onClickLink.bind(Object(v.a)(a)),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=document.getElementById("MenuMobile");this.setState({sidenavInstance:f.a.Sidenav.init(e)})}},{key:"componentWillUnmount",value:function(){this.state.sidenavInstance.destroy()}},{key:"onClickLink",value:function(){this.state.sidenavInstance.close()}},{key:"render",value:function(){return n.a.createElement("ul",{id:"MenuMobile",className:"sidenav"},n.a.createElement("li",null,n.a.createElement("div",{className:"user-view"},n.a.createElement("div",{className:"background"}),n.a.createElement("a",{href:"##"},n.a.createElement("img",{className:"circle","aria-label":"Favico leydev",src:"/assets/icon/favicon.png",alt:""})),n.a.createElement("a",{href:"#home"},n.a.createElement("span",{className:"name white-text"},"Leydev | Wesley Developer")))),n.a.createElement("li",null,n.a.createElement("a",{className:"",onClick:this.onClickLink,href:"#whoami"},n.a.createElement("i",{className:"fas fa-question-circle blue-text"}),"How Am I")),n.a.createElement("li",null,n.a.createElement("a",{className:"",onClick:this.onClickLink,href:"#services"},n.a.createElement("i",{className:"fas fa-concierge-bell blue-text"}),"Servi\xe7os")),n.a.createElement("li",null,n.a.createElement("a",{className:"",onClick:this.onClickLink,href:"#portfolio"},n.a.createElement("i",{className:"fas fa-bookmark blue-text"}),"Portf\xf3lio")),n.a.createElement("li",null,n.a.createElement("a",{className:"",onClick:this.onClickLink,href:"#certificates"},n.a.createElement("i",{className:"fas fa-award blue-text"}),"Certificados")),n.a.createElement("li",null,n.a.createElement("div",{className:"divider"})),n.a.createElement("li",null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col s6 m6"},n.a.createElement("a",{href:"//www.linkedin.com/in/wesley-a",target:"_blank",rel:"noopener noreferrer",className:"btn-flat ","aria-label":"Perfil no linkdin"},"Linkedin ",n.a.createElement("i",{className:"fab fa-linkedin-in  right"}))),n.a.createElement("div",{className:"col s6 m6"},n.a.createElement("a",{href:"https://github.com/leydev",target:"_blank",rel:"noopener noreferrer",className:"btn-flat ","aria-label":"Perfil no github"},"Github ",n.a.createElement("i",{className:"fab fa-github  right"}))))))}}]),t}(n.a.Component),g=(a(41),function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("svg",{className:"leyd-logo-svg-header",viewBox:"0 0 383 109",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M7.59131 23.1653L21.7856 28.1707V35.1434L0.344727 26.054V20.1771L21.7856 11.0877V18.0604L7.59131 23.1653ZM56.4248 28.096L61.3057 2.29718H68.7515L60.708 38.555H53.1875L47.2856 14.3001L41.3838 38.555H33.8633L25.8198 2.29718H33.2656L38.1714 28.0462L44.1479 2.29718H50.4731L56.4248 28.096ZM83.9419 39.053C79.9907 39.053 76.77 37.8411 74.2798 35.4173C71.8062 32.9935 70.5693 29.7645 70.5693 25.7303V25.033C70.5693 22.327 71.0923 19.9114 72.1382 17.7864C73.1841 15.6448 74.6616 14.0013 76.5708 12.8558C78.4966 11.6937 80.688 11.1126 83.145 11.1126C86.8306 11.1126 89.7275 12.2747 91.8359 14.5989C93.9609 16.9232 95.0234 20.2186 95.0234 24.4852V27.4236H77.8657C78.0981 29.1834 78.7954 30.5945 79.9575 31.657C81.1362 32.7195 82.6221 33.2508 84.415 33.2508C87.1875 33.2508 89.354 32.2464 90.9146 30.2376L94.4507 34.1971C93.3716 35.7244 91.9106 36.9197 90.0679 37.783C88.2251 38.6297 86.1831 39.053 83.9419 39.053ZM83.1201 16.9398C81.6924 16.9398 80.5303 17.4212 79.6338 18.3841C78.7539 19.347 78.1895 20.7249 77.9404 22.5179H87.9512V21.9451C87.918 20.3514 87.4863 19.1229 86.6562 18.2596C85.8262 17.3797 84.6475 16.9398 83.1201 16.9398ZM113.725 31.1092C113.725 30.2293 113.285 29.5403 112.405 29.0423C111.542 28.5276 110.147 28.0711 108.222 27.6727C101.813 26.3279 98.6094 23.6053 98.6094 19.5047C98.6094 17.1141 99.5972 15.1219 101.573 13.5281C103.565 11.9178 106.163 11.1126 109.367 11.1126C112.787 11.1126 115.518 11.9178 117.56 13.5281C119.619 15.1385 120.648 17.2303 120.648 19.8035H113.451C113.451 18.7742 113.119 17.9276 112.455 17.2635C111.791 16.5828 110.753 16.2425 109.342 16.2425C108.13 16.2425 107.192 16.5164 106.528 17.0643C105.864 17.6121 105.532 18.3094 105.532 19.1561C105.532 19.9529 105.906 20.6004 106.653 21.0984C107.417 21.5799 108.695 22.0032 110.488 22.3685C112.281 22.7171 113.792 23.1155 115.02 23.5638C118.822 24.9583 120.723 27.3738 120.723 30.8104C120.723 33.2674 119.668 35.2596 117.56 36.7869C115.452 38.2977 112.729 39.053 109.392 39.053C107.134 39.053 105.125 38.6546 103.366 37.8577C101.623 37.0443 100.253 35.9402 99.2568 34.5457C98.2607 33.1346 97.7627 31.6155 97.7627 29.9886H104.586C104.652 31.2669 105.125 32.2464 106.005 32.9271C106.885 33.6077 108.064 33.9481 109.542 33.9481C110.919 33.9481 111.957 33.6907 112.654 33.1761C113.368 32.6448 113.725 31.9559 113.725 31.1092ZM206.461 23.0906L191.993 18.0355V11.1126L213.683 20.202V26.054L191.993 35.1683V28.2205L206.461 23.0906ZM109.193 83.1653L123.387 88.1707V95.1434L101.946 86.054V80.1771L123.387 71.0877V78.0604L109.193 83.1653ZM227.927 99.053C223.976 99.053 220.755 97.8411 218.265 95.4173C215.792 92.9935 214.555 89.7645 214.555 85.7303V85.033C214.555 82.327 215.078 79.9114 216.124 77.7864C217.169 75.6448 218.647 74.0013 220.556 72.8558C222.482 71.6937 224.673 71.1126 227.13 71.1126C230.816 71.1126 233.713 72.2747 235.821 74.5989C237.946 76.9232 239.009 80.2186 239.009 84.4852V87.4236H221.851C222.083 89.1834 222.781 90.5945 223.943 91.657C225.122 92.7195 226.607 93.2508 228.4 93.2508C231.173 93.2508 233.339 92.2464 234.9 90.2376L238.436 94.1971C237.357 95.7244 235.896 96.9197 234.053 97.783C232.21 98.6297 230.168 99.053 227.927 99.053ZM227.105 76.9398C225.678 76.9398 224.516 77.4212 223.619 78.3841C222.739 79.347 222.175 80.7249 221.926 82.5179H231.937V81.9451C231.903 80.3514 231.472 79.1229 230.642 78.2596C229.812 77.3797 228.633 76.9398 227.105 76.9398ZM250.713 98.555H243.491V60.305H250.713V98.555ZM255.544 84.8338C255.544 82.1609 256.059 79.7786 257.088 77.6868C258.117 75.595 259.595 73.9764 261.521 72.8309C263.463 71.6854 265.712 71.1126 268.269 71.1126C271.905 71.1126 274.868 72.2249 277.159 74.4495C279.467 76.6741 280.753 79.6956 281.019 83.514L281.069 85.3568C281.069 89.4905 279.915 92.8109 277.607 95.3177C275.3 97.8079 272.204 99.053 268.319 99.053C264.434 99.053 261.33 97.8079 259.005 95.3177C256.698 92.8275 255.544 89.4407 255.544 85.1575V84.8338ZM262.741 85.3568C262.741 87.9134 263.222 89.8724 264.185 91.2337C265.148 92.5784 266.526 93.2508 268.319 93.2508C270.062 93.2508 271.423 92.5867 272.403 91.2586C273.382 89.9139 273.872 87.7723 273.872 84.8338C273.872 82.327 273.382 80.3846 272.403 79.0067C271.423 77.6287 270.045 76.9398 268.269 76.9398C266.509 76.9398 265.148 77.6287 264.185 79.0067C263.222 80.368 262.741 82.4847 262.741 85.3568ZM309.756 85.3318C309.756 89.4822 308.81 92.8109 306.917 95.3177C305.042 97.8079 302.501 99.053 299.297 99.053C296.575 99.053 294.375 98.1068 292.698 96.2142V108.914H285.501V71.6107H292.175L292.424 74.2503C294.167 72.1585 296.442 71.1126 299.248 71.1126C302.568 71.1126 305.149 72.3411 306.992 74.7982C308.835 77.2552 309.756 80.6419 309.756 84.9583V85.3318ZM302.56 84.8089C302.56 82.3021 302.111 80.368 301.215 79.0067C300.335 77.6453 299.048 76.9647 297.355 76.9647C295.097 76.9647 293.545 77.8279 292.698 79.5545V90.5862C293.578 92.3626 295.147 93.2508 297.405 93.2508C300.841 93.2508 302.56 90.4368 302.56 84.8089ZM326.64 99.053C322.689 99.053 319.468 97.8411 316.978 95.4173C314.504 92.9935 313.268 89.7645 313.268 85.7303V85.033C313.268 82.327 313.791 79.9114 314.836 77.7864C315.882 75.6448 317.36 74.0013 319.269 72.8558C321.195 71.6937 323.386 71.1126 325.843 71.1126C329.529 71.1126 332.426 72.2747 334.534 74.5989C336.659 76.9232 337.722 80.2186 337.722 84.4852V87.4236H320.564C320.796 89.1834 321.494 90.5945 322.656 91.657C323.834 92.7195 325.32 93.2508 327.113 93.2508C329.886 93.2508 332.052 92.2464 333.613 90.2376L337.149 94.1971C336.07 95.7244 334.609 96.9197 332.766 97.783C330.923 98.6297 328.881 99.053 326.64 99.053ZM325.818 76.9398C324.391 76.9398 323.229 77.4212 322.332 78.3841C321.452 79.347 320.888 80.7249 320.639 82.5179H330.649V81.9451C330.616 80.3514 330.185 79.1229 329.354 78.2596C328.524 77.3797 327.346 76.9398 325.818 76.9398ZM356.971 78.3592C355.992 78.2264 355.128 78.16 354.381 78.16C351.659 78.16 349.874 79.0814 349.027 80.9241V98.555H341.831V71.6107H348.629L348.828 74.8231C350.272 72.3494 352.273 71.1126 354.83 71.1126C355.626 71.1126 356.374 71.2205 357.071 71.4363L356.971 78.3592ZM375.15 83.0906L360.682 78.0355V71.1126L382.372 80.202V86.054L360.682 95.1683V88.2205L375.15 83.0906Z",fill:"#2C98D5"}),n.a.createElement("path",{d:"M132.975 38.555H125.753V0.304993H132.975V38.555ZM151.328 39.053C147.376 39.053 144.156 37.8411 141.666 35.4173C139.192 32.9935 137.955 29.7645 137.955 25.7303V25.033C137.955 22.327 138.478 19.9114 139.524 17.7864C140.57 15.6448 142.047 14.0013 143.957 12.8558C145.882 11.6937 148.074 11.1126 150.531 11.1126C154.216 11.1126 157.113 12.2747 159.222 14.5989C161.347 16.9232 162.409 20.2186 162.409 24.4852V27.4236H145.251C145.484 29.1834 146.181 30.5945 147.343 31.657C148.522 32.7195 150.008 33.2508 151.801 33.2508C154.573 33.2508 156.74 32.2464 158.3 30.2376L161.836 34.1971C160.757 35.7244 159.296 36.9197 157.454 37.783C155.611 38.6297 153.569 39.053 151.328 39.053ZM150.506 16.9398C149.078 16.9398 147.916 17.4212 147.02 18.3841C146.14 19.347 145.575 20.7249 145.326 22.5179H155.337V21.9451C155.304 20.3514 154.872 19.1229 154.042 18.2596C153.212 17.3797 152.033 16.9398 150.506 16.9398ZM176.23 28.3699L181.21 11.6107H188.93L178.098 42.7386L177.5 44.158C175.89 47.6776 173.233 49.4373 169.531 49.4373C168.485 49.4373 167.423 49.2796 166.344 48.9642V43.5106L167.439 43.5355C168.801 43.5355 169.813 43.3279 170.478 42.9129C171.158 42.4979 171.689 41.8089 172.071 40.846L172.918 38.6297L163.48 11.6107H171.225L176.23 28.3699ZM129.787 98.555V62.2972H140.943C144.131 62.2972 146.978 63.0193 149.485 64.4637C152.008 65.8914 153.976 67.9334 155.387 70.5897C156.798 73.2293 157.503 76.2342 157.503 79.6043V81.2728C157.503 84.6429 156.806 87.6395 155.412 90.2625C154.034 92.8856 152.083 94.9193 149.56 96.3636C147.036 97.8079 144.189 98.5384 141.018 98.555H129.787ZM137.258 68.3484V92.5535H140.869C143.791 92.5535 146.023 91.5989 147.567 89.6898C149.111 87.7806 149.9 85.0496 149.933 81.4969V79.5794C149.933 75.8939 149.169 73.1048 147.642 71.2122C146.115 69.303 143.882 68.3484 140.943 68.3484H137.258ZM174.885 99.053C170.934 99.053 167.713 97.8411 165.223 95.4173C162.75 92.9935 161.513 89.7645 161.513 85.7303V85.033C161.513 82.327 162.036 79.9114 163.082 77.7864C164.127 75.6448 165.605 74.0013 167.514 72.8558C169.44 71.6937 171.631 71.1126 174.088 71.1126C177.774 71.1126 180.671 72.2747 182.779 74.5989C184.904 76.9232 185.967 80.2186 185.967 84.4852V87.4236H168.809C169.042 89.1834 169.739 90.5945 170.901 91.657C172.08 92.7195 173.565 93.2508 175.358 93.2508C178.131 93.2508 180.297 92.2464 181.858 90.2376L185.394 94.1971C184.315 95.7244 182.854 96.9197 181.011 97.783C179.168 98.6297 177.126 99.053 174.885 99.053ZM174.063 76.9398C172.636 76.9398 171.474 77.4212 170.577 78.3841C169.697 79.347 169.133 80.7249 168.884 82.5179H178.895V81.9451C178.861 80.3514 178.43 79.1229 177.6 78.2596C176.77 77.3797 175.591 76.9398 174.063 76.9398ZM199.812 89.7645L204.818 71.6107H212.338L203.249 98.555H196.376L187.287 71.6107H194.807L199.812 89.7645Z",fill:"white"}))}}]),t}(n.a.Component)),y=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("p",{className:"leyd-header-decription flow-text"},"Desenvolvedor web full stack & t\xe9cnico de suporte.")}}]),t}(n.a.Component),N=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("header",{className:"leyd-header"},n.a.createElement("div",{className:"leyd-container-filter"},this.props.children,n.a.createElement("div",{className:"leyd-content-title-description"},n.a.createElement(g,null),n.a.createElement(y,null))))}}]),t}(n.a.Component),k=a(9),w=a(17),j=a.n(w),x=(a(105),a(106),a(107),a(108),a(109),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={id:e.id,class:"leyd-section "+e.className,style:{backgroundColor:e.background,display:"block"}},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("section",{id:this.state.id,style:this.state.style,className:this.state.class},n.a.createElement(k.Row,{className:this.props.classNameRow},this.props.children))}}]),t}(n.a.Component)),L=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement(x,{id:"howami",classNameRow:"scrollspy leyd-flex-l leyd-flex-xl"},n.a.createElement(k.Col,{s:12,m:12,l:6,xl:5,className:"leyd-photo-container-whoami"},n.a.createElement("img",{src:"/assets/wesley.jpg",className:"leyd-photo-whoami",alt:"Wesley"})),n.a.createElement(k.Col,{s:12,m:12,l:6,xl:7,className:"leyd-text-container-whoami"},n.a.createElement("div",{className:"leyd-text-whoami"},n.a.createElement("h2",{className:"blue-text",lang:"en  "},"Who am I"),n.a.createElement("p",{className:"flow-text grey-text text-darken-3"},"Ol\xe1. Sou Wesley, desenvolvedor web full stack. ",n.a.createElement("br",null),"Estudo autodidata programa\xe7\xe3o desde 2014, e minha linguagem prim\xe1ria hoje \xe9 Javascript.",n.a.createElement("br",null),"Tamb\xe9m sou formado em t\xe9cnico de suporte e manuten\xe7\xe3o para inform\xe1tica pelo Instituto T\xe9cnico de Barueri."))))}}]),t}(n.a.Component),O=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={listServices:[]},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=this;j.a.get("/assets/data/services.json").then(function(t){e.setState({listServices:t.data})}).catch(function(e){console.log(e)})}},{key:"mapList",value:function(e){return arguments.length>1&&void 0!==arguments[1]&&arguments[1]?e.map(function(e){return n.a.createElement(k.Col,{m:6,l:6,xl:3,key:e.legen,className:"hide-on-small-only"},n.a.createElement("figure",{className:"leyd-figure-service"},n.a.createElement("img",{src:e.imgem,alt:"",className:"leyd-img-figure-service"}),n.a.createElement("figcaption",null,e.legen)),n.a.createElement("p",{className:"center"},e.desc))}):e.map(function(e){return n.a.createElement("div",{key:e.legen,style:{display:"flex",alignItems:"center",justifyContent:"center"}},n.a.createElement("div",{style:{display:"block"}},n.a.createElement("figure",{className:"leyd-figure-service"},n.a.createElement("img",{src:e.imgem,alt:"",className:"leyd-img-figure-service"}),n.a.createElement("figcaption",{className:"black-text"},e.legen)),n.a.createElement("p",{className:"center black-text"},e.desc)))})}},{key:"render",value:function(){var e=this.state.listServices;return e.length?n.a.createElement(x,{id:"services",classNameRow:"center",background:"#F7F7F7"},n.a.createElement(k.Col,{s:12,m:12,l:12,xl:12},n.a.createElement("h2",{className:"leyd-h2 center blue-text"},"Servi\xe7os")),this.mapList(e,!0),n.a.createElement(k.Col,{s:12,m:12,className:"hide-on-med-and-up"},n.a.createElement(k.Carousel,{options:{fullWidth:!1,dist:0,shift:50},className:" white-text center"},this.mapList(e,!1)))):null}}]),t}(n.a.Component),V=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={img:e.img,title:e.title,description:e.description,link:e.link},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"card hoverable",style:{display:"inline-block"}},n.a.createElement("div",{className:"card-image"},n.a.createElement("img",{src:this.state.img,alt:"",className:"leyd-img-card"}),n.a.createElement("a",{className:"btn-floating halfway-fab waves-effect waves-light cyan pulse",href:this.state.link,rel:"noopener noreferrer",target:"_blank"},n.a.createElement("i",{className:"material-icons"},"launch"))),n.a.createElement("div",{className:"card-content"},n.a.createElement("span",{className:"card-title black-text"},this.state.title),n.a.createElement("p",null,this.props.children)))}}]),t}(n.a.Component),M=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).WrapCarousel=function(e){return n.a.createElement("div",null,e.childrens)},a.state={listPortf:[]},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=this;j.a.get("/assets/data/portfolio.json").then(function(t){e.setState({listPortf:t.data})}).catch(function(e){console.log(e)})}},{key:"mapList",value:function(e){return arguments.length>1&&void 0!==arguments[1]&&arguments[1]?e.map(function(e){return n.a.createElement(k.Col,{l:3,xl:3,key:e.title,className:"hide-on-med-and-down"},n.a.createElement(V,{link:e.link,img:e.urlImg,title:e.title},e.desc))}):e.map(function(e){return n.a.createElement("div",{key:e.title,style:{display:"flex",alignItems:"center"}},n.a.createElement(V,{link:e.link,img:e.urlImg,title:e.title}))})}},{key:"render",value:function(){var e=this.state.listPortf;return e.length?n.a.createElement(x,{id:"portfolio"},n.a.createElement(k.Col,{s:12,m:12,l:12,xl:12},n.a.createElement("h2",{className:"leyd-h2 center blue-text"},"Portf\xf3lio")),this.mapList(e,!0),n.a.createElement(k.Col,{s:12,m:12,className:"hide-on-large-only"},n.a.createElement(k.Carousel,{options:{fullWidth:!1,dist:0,shift:30},className:" white-text center"},this.mapList(e,!1)))):null}}]),t}(n.a.Component),H=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={ref:n.a.createRef(),prepared:!1,listCert:[]},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=this;j.a.get("/assets/data/certificates.json").then(function(t){e.setState({listCert:t.data,prepared:!0})}).catch(function(e){console.log(e)})}},{key:"mapList",value:function(e){return e.map(function(e){return n.a.createElement("div",{key:e.urlImg,className:"leyd-container-carousel-certificate hoverable"},n.a.createElement("a",{href:e.urlImg,rel:"noopener noreferrer","aria-label":"Ver certificado "+e.title,target:"_blank"},n.a.createElement("img",{alt:"Certificado "+e.title,className:"leyd-slide-carousel-certificate",src:e.urlImg,srcSet:e.urlImg+"600max 300w,"+e.urlImg+"601min992max 420w,"+e.urlImg+"993min1200max 520w,"+e.urlImg+"600min 550w",sizes:"(max-width: 600px) 300px,(min-width: 601px) and (max-width: 992px) 420px,(min-width: 993px) and (max-width: 1200px) 520px,(min-width: 1201px) 550px"})))})}},{key:"componentDidUpdate",value:function(){if(this.state.prepared){var e,t=function(){e=setInterval(function(){l.next(1)},3e3)},a=this.refs.carousel1.instance.el,l=f.a.Carousel.getInstance(a);a.addEventListener("mouseover",function(){clearInterval(e)}),a.addEventListener("mouseout",function(){t()}),t()}}},{key:"render",value:function(){var e=this.state.listCert;return e.length?n.a.createElement(x,{id:"certificates",background:"#F7F7F7"},n.a.createElement(k.Col,{s:12,m:12,l:12,xl:12},n.a.createElement("h2",{className:"leyd-h2 center blue-text"},"Certificados")),n.a.createElement(k.Col,{s:12,m:12,l:12,xl:12,className:""},n.a.createElement(k.Carousel,{carouselId:"chatoPraCaralho",ref:"carousel1",options:{fullWidth:!1},className:"leyd-carousel-certificate white-text center"},this.mapList(e)))):null}}]),t}(n.a.Component),Z=(a(110),function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("footer",{className:"page-footer grey darken-4"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col s12 m6 l4"},n.a.createElement("h5",{className:"blue-text"},"Links para aprendizado"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{className:"grey-text text-lighten-3 leyd-text-footer",rel:"noopener noreferrer",href:"https://developer.mozilla.org",target:"_blank"},n.a.createElement("i",{className:"fas fa-chevron-right"})," Mozilla Developer Network")),n.a.createElement("li",null,n.a.createElement("a",{className:"grey-text text-lighten-3 leyd-text-footer",rel:"noopener noreferrer",href:"https://www.w3.org/",target:"_blank"},n.a.createElement("i",{className:"fas fa-chevron-right"})," Word Wide Web Consortium")),n.a.createElement("li",null,n.a.createElement("a",{className:"grey-text text-lighten-3 leyd-text-footer",rel:"noopener noreferrer",href:"https://www.w3schools.com",target:"_blank"},n.a.createElement("i",{className:"fas fa-chevron-right"})," W 3 Schools")),n.a.createElement("li",null,n.a.createElement("a",{className:"grey-text text-lighten-3 leyd-text-footer",rel:"noopener noreferrer",href:"https://developers.google.com/",target:"_blank"},n.a.createElement("i",{className:"fas fa-chevron-right"})," Google Developers")))),n.a.createElement("div",{className:"col l4 m6 s12"},n.a.createElement("h5",{className:"blue-text"},"Contatar-me"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{className:"grey-text text-lighten-3 leyd-text-footer",href:"tel:+5511989197263"},n.a.createElement("i",{className:"fab fa-whatsapp"}),"   (11) 98919 - 7263")),n.a.createElement("li",null,n.a.createElement("a",{className:"grey-text text-lighten-3 leyd-text-footer",href:"mailto:wesley.waaraujo@gmail.com"},n.a.createElement("i",{className:"far fa-envelope"}),"   wesley.waaraujo@gmail.com")))))),n.a.createElement("div",{className:"footer-copyright"},n.a.createElement("div",{className:"container"},"\xa9 2019 Copyright.",n.a.createElement("a",{className:"grey-text text-lighten-4 right",href:"#home"},"Leydev ",n.a.createElement("abbr",{title:"Cadastro Nacional da Pessoa Jur\xeddica"},"CNPJ")," 34.045.888/0001-09"))))}}]),t}(n.a.Component)),I=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(h,null),n.a.createElement(C,null),n.a.createElement(p,null),n.a.createElement(b,null),n.a.createElement(N,null),n.a.createElement(L,null),n.a.createElement("div",{className:"divider"}),n.a.createElement(O,null),n.a.createElement("div",{className:"divider"}),n.a.createElement(M,null),n.a.createElement("div",{className:"divider"}),n.a.createElement(H,null),n.a.createElement(Z,null))}}]),t}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},33:function(e,t,a){e.exports=a(111)},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){}},[[33,1,2]]]);
//# sourceMappingURL=main.007771e6.chunk.js.map