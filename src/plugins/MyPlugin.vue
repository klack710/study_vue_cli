<script>
var MyPlugin = {
  install: function(Vue) {
    console.log("MyPlugin is loaded.");

    var store = new Vue({
      data: { scrollY: 0 }
    });

    var timer = null;
    window.addEventListener("scroll", function() {
      if (timer === null) {
        timer = setTimeout(function() {
          store.scrollY = window.scrollY;
          clearTimeout(timer);
          timer = null;
        });
      }
    });

    Vue.prototype.$window = store.$data;
  }
};

export default MyPlugin;
</script>

