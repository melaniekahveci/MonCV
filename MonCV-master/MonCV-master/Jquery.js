$(document).ready(function(){
    $('.flip h2').click(function(){
        $this = $(this).parent('.flip');
        $this.find('.panel').slideToggle("slow");
        $this.toggleClass('hidden');
    });
});

