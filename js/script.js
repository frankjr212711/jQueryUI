
const tabContainer = document.querySelector('.about-tabs');
const aboutSection = document.querySelector('.about-section');

    tabContainer.addEventListener('click', (e) => {
        if(e.target.classList.contains('tab-item') && !e.target.classList.contains('active')) {
            tabContainer.querySelector('.active').classList.remove('active');
            e.target.classList.add('active');

            const target = e.target.getAttribute('data-target');
            aboutSection.querySelector('.tab-content.active').classList.remove('active');
            aboutSection.querySelector(target).classList.add('active');
        }
    })

    // portfolio item detail popup 
document.addEventListener('click', function(e) {
   if(e.target.classList.contains('view-project-btn')) {
    togglePortfolioPopup();
    portfolioItemDetails(e.target.parentElement);
   }
 
})

function togglePortfolioPopup () {
    document.querySelector('.portfolio-popup').classList.toggle('open');
    document.body.classList.toggle('hide-scrolling');
    document.querySelector('.main').classList.toggle('fade-out');
}
function portfolioItemDetails (portfolioItem) {
    document.querySelector('.pp-thumbnail img').src = portfolioItem.querySelector('.portfolio-item-thumbnail img').src;
    document.querySelector('.pp-close').addEventListener('click', togglePortfolioPopup)

}






// $(function() {
//     $("#todoList ul").sortable({
//         items: "li:not('.listTitle, .addItem')",
//         connectWith: 'ul',
//         dropOnEmpty: true,
//         placeholder: 'emptyspace'
//     });

//     $('input').keydown(function(e) {
//         if(e.keyCode == 13) {
//             let item = $(this).val();
//             $(this).parent().parent().append('<li>' + item + '</li>')
//         }
//     })
// })

