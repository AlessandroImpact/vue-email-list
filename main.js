const app = new Vue(
    {
        el:'#app',
        data: {
            emails: []
        },


        mounted() {
            for (i=0;i<=9;i++) {

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then( (response) => {
            
            this.emails.push(response.data.response)
        });

            }
        }

    }
) 