const bodyComponent = {
    template: `
    <div>
        <h2>Body Component {{titre}} </h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum sapiente porro fugiat facere temporibus nemo. Amet architecto illum pariatur at dolorem? Doloremque asperiores labore enim eaque, odio nulla eius nam.</p>
        <p> {{message}} </p>
    </div>
    
    
    `,
    props: ['titre'],
    data: function(){
        return {
            message: 'hello'
        }
    }
}

export default bodyComponent;