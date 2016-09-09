;$(function() {

    $('.carousel').myCarousel();

    var user = {
        name: "Кожокарь Денис Анатольевич",
        img: '<img src="img/ava.jpg" alt="Ava" title="This is me!">',
        description: "Студент GoIt направление фронтенд",
        purposes: ["Хочу работать в ИТ", 
        "Поможет лучше разобраться с бекендом", 
        "Новые знания не бывают лишними"
        ],
        number: "+380666666666",
        link: '<a href="vk.com/denis_kozhokar">vk.com</a>',
        feedback: "Если нужно, могу сделать сайт на Codeigniter.",
    };

    var tmpl = $('#profil_template').html();
    content = _.template(tmpl);


    $('#holder').append(content(user));

});
