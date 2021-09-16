let root = new Vue(
    {
        el:'#root',
        data: {
            toDoList:['viola', 'blu', 'rosso', 'giallo', 'verde'],
            toDoField: " ",

        },
        methods: {
            eliminaElemento: function(index){
                this.toDoList.splice(index, 1);
            },
            aggiungiElemento: function(){

                if(this.toDoField.trim().length > 0 && (!this.toDoList.includes(this.toDoField)) ){

                    this.toDoList.push(this.toDoField);

                    this.toDoField = '';
                    console.log('successo');
                }         
            },
        }
    }
);