jQuery(document).ready(function() {
    jQuery('.about_your_product').addClass("hiddenn").viewportChecker({
        classToAdd: 'visiblee animated fadeIn',
        offset: 300
    });

    jQuery('.dignity_and_pluses_product').addClass("hiddenn").viewportChecker({
        classToAdd: 'visiblee animated bounce',
        offset: 300
    });

    jQuery('.screenshots').addClass("hiddenn").viewportChecker({
        classToAdd: 'visiblee animated fadeIn',
        offset: 300
    });

    jQuery('.reviews').addClass("hiddenn").viewportChecker({
        classToAdd: 'visiblee animated fadeIn',
        offset: 300
    });

    jQuery('.buy_it_now').addClass("hiddenn").viewportChecker({
        classToAdd: 'visiblee animated fadeIn',
        offset: 300
    });

    jQuery('footer').addClass("hiddenn").viewportChecker({
        classToAdd: 'visiblee animated slideInUp',
        offset: 300
    });
});