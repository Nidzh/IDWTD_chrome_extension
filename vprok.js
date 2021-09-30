(function() {
    let parsedData = {
        "Батон Хлебный дом Звездный нарезанный 350г": 'арахис'
    }
    
    let data = {
        labels: ['a.xf-product-title__link.js-product__title.xf-product-title__link--additional', 'h1.xf-product-new__title.js-product__title.js-product-new-title'],
        mark: ['.xf-product__picture.xf-product-picture', 'div.xf-product-new-gallery__view-wrap'],
        data: parsedData,
    }
    
    function inject() {
        let script = document.createElement('script');
        script.text = `window.IDWTD.vprok = ` + JSON.stringify(data);
        document.documentElement.appendChild(script);
    }
    
    inject();
}())
