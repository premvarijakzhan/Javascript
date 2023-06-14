const _items = new WeakMap();



class Stack {
    constructor()
        {
            _items.set(this,[]);
        }

        push(obj){
            _items.get(this).push(obj);
        }

        pop(){

            const items = _items.get(this)

            if(items.length ===0)
                throw new Error('Stack Is Empty.');

            return items.pop();
        }

        peak(){
            const items = _items.get(this);

            if(items.length === 0)            
                throw new Error('Stack Is Empty.');

            return items[items.length - 1 ];
        }


        get count(){
            return _items.get(this).length;
        }
}