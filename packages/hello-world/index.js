import HellowolrdComponent from './src/hello-world';

HellowolrdComponent.install = function(Vue) {
    Vue.component(HellowolrdComponent.name, HellowolrdComponent);
};

export const HelloWorld = HellowolrdComponent;
