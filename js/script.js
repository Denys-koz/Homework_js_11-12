;$(function() {

    $('.carousel').myCarousel();

    var user = {
        name: "Кожокарь Денис Анатольевич",
        img: "img/ava.jpg",
        about: "Студент GoIt направление фронтенд",
        purposes:["Хочу работать в ИТ", 
        "Поможет лучше разобраться с бекендом", 
        "Новые знания не бывают лишними"
        ],
        number: "+380666666666",
        vk: "vk.com/denis_kozhokar",
        feedback: "Если нужно, могу сделать сайт на Codeigniter.",

    };

    var tmpl = $('#profil-template').html();
    var content = _.template(tmpl);


    $('#holder').append(content({user}));

});
