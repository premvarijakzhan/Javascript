//self approach

// const video = {
//     title: 'a',
//     tags: ['a','b','c'],
//     showTags(){
//         const self = this;
//         this.tags.forEach(function(tag){
//             console.log(self.title,tag);
//         });
//     }
// };


//bind aaproach

// const video = {
//     title: 'a',
//     tags: ['a','b','c'],
//     showTags(){
        
//         this.tags.forEach(function(tag){
//             console.log(this.title,tag);
//         }.bind(this));
//     }
// };


//arrao function
const video = {
    title: 'a',
    tags: ['a','b','c'],
    showTags(){
        
        this.tags.forEach(tag =>{
            console.log(this.title,tag);
        });
    }
};

 video.showTags();


// function playVideo(a,b) {
//     console.log(this);
// }

// playVideo.call({name:'Prem'},1,2);
// playVideo.apply({name:'Prem'},[1,2]);
// // const fn = playVideo.bind({name:'Prem'});
// // fn();
//  const fn = playVideo.bind({name:'Prem'})();
// playVideo();