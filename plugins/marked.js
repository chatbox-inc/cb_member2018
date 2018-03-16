import Vue from 'vue'
import marked from "marked";

Vue.mixin({
  methods:{
    marked(value){
      const renderer = new marked.Renderer();

      renderer.link = (href, title, text) => {
        return (
          '<a target="_blank" href="' +
          href +
          '" title="' +
          title +
          '">' +
          text +
          "</a>"
        );
      };

      return marked(value, {
        sanitize: false,
        gfm: true,
        breaks: true,
        renderer: renderer
      });
    }
  }
})
