// 工厂模式
/**
 * 工厂模式，其实就是生产统一标准的物品，消费者只需要知道通过工厂可以获得对应的物品
 * 而不需要去关注该物品的制作过程。我们将逻辑包装到工厂中，并返回一个调用方法，
 * 通过调用方法可以返回一个实例。这就是工厂模式。
 */

class Dog {
    eat() {
        console.log('dog eatting');
    }
}

class PetHome {
    getPetBycategory(category) {
        return new category();
    }
}

new PetHome().getPetBycategory(Dog).eat();