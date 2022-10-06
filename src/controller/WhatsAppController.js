class WhatsAppController {

    constructor(){

        console.log('WhatsAppController ok');

        this.elementPrototype();
        this.loadElements();


    }

    loadElements(){

        this.el = {};

        document.querySelectorAll('[id]').forEach(element=>{

            this.el[Format.getCamelCase(element.id)] = element;

        });

    }

    elementPrototype(){

        Element.prototype.hide = function(){

            this.style.display = 'none';

        }

        Element.prototype.show = function(){

            this.style.display = 'block';

        }

        Element.prototype.toggle = function(){

            this.style.display = (this.style.display === 'none') ? 'block' : 'none';

        }

        Element.prototype.on = function(){

            events.split(' ').forEach(event=>{

                this.addEventListener(event, fn);

            });

        }

        Element.prototype.css =  function(styles){

            for(let name in styles){

                this.style[name] = styles[name];

            }

        }

        Element.prototype.addClass = function(name){

            this.classList.add(name);

        }

        Element.prototype.removeClass = function(name){

            this.classList.remove(name);

        }

        Element.prototype.toggleClass = function(name){

            this.classList.toggle(name);

        }

        Element.prototype.hasClass = function(name){

            return this.classList.contains(name);

        }

    }



}