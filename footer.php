</body>
<script>
 

    function jQueryDefer(method) {
    if(typeof method != "function")
    return;

    var name = 'xDefer_' + parseInt(Math.random() * 10000000000000)
    window.Konesso.behaviors[name] = {
    attach : method
    }
    }

   
</script>
</html>