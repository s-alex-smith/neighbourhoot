const SamsBirds = [
  {
    location: "North Leeds",
    bird_id: 1,
    bird_name: "House Martin",
    features: { wingspan: 28, head: "Black", back: "Black", chest: "White" },
    user_id: 1,
    img_url:
      "https://nppicturestorage.s3.eu-west-2.amazonaws.com/aCcndxYxTKmLj5bR4h7moP.jpeg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMiJHMEUCIGHlmbCNk9guuNpE73zQJj0vKDsHY9AZ4JfymLWMleRQAiEAi8nAntSd5WJhufzQTxLdCXD1QL1WcBR6m0TAIqEwuYsq%2FQEILhAAGgw0ODQxNzgwMDM3NzUiDLJMNEkvsiqgLXhVSiraASoLkoFEgXH%2F929Onz5Kuiq3kB%2BxBLfp3%2FViFn4F5rm4mctS9mOIyjnYQ4D0yG%2F7f9HyBhcjhZZ3YVOK2iNURUEmcSWNIkJwjslNu8wIoM8hEpPIMDGgceXF6s3apkhdK95J6yUOQc10HOuDDZixu2Y7rSEShUc2jMiqLsmpwVlPSNuIOjmkHNu7KpHqM71BBAVC3IbRC0j%2FS4eVB6zw7Wmr9YUZR9KL%2BQEbGTXoBgOsRGhFDE30fGIekeWE451s7CBFa1W%2BjB%2BXlUlYcntW7S%2F0xLM7zXCxX7svMOzFr%2FUFOvACeSS%2Bs%2FrLB6l0xovrDJiz2icSoN49jw%2FobfcdlzNp%2FJZTTFPz51eG3Jki5FWCP9x%2FMfRTAXC5K7QY%2FfOmDvVlfdxoDqnWsr2wsr7WNxjOUjMvCBwpaMbk9CDWRYLgJYiQUZN%2B5EKd9%2BC%2FxCtmvUK4ol7bhMcEvj0GXYCcF5XlkZ0BjDUDYBLbbraRy1mOHO2Hv8wtQq2YYFQzilHT5r0wQCCQhhbUHFQZWLK4yH98IfmqwbIgJ5WlroGZBStE7fv%2Bhc2X8Eteut3%2BiWuw6MO1rxXg4NoMI1yFF9L0BuPOfsp6a4IdYfPkCvY8BEhRypP15Bx7C8y%2BbbUsDhNwvTMHgdpdKupHjGUZnKJvo1uEJsjSSJSPqu7S4sPMMi4Cv8k2%2FJxLrT8JQQoU7BLCTD2p3E1xgRYjB4Sg64Bdonvw2J9NYWqhc1PM3MZjLd7hN1VonfU9oW62%2B27ucKKQURqEB6KQcX34jlwatMuGLXtrUJQ%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20200501T125955Z&X-Amz-SignedHeaders=host&X-Amz-Expires=299&X-Amz-Credential=ASIAXBO2CA47QA5CUGKJ%2F20200501%2Feu-west-2%2Fs3%2Faws4_request&X-Amz-Signature=d643a321f6c248d68be2532aae715fe483bda37640e6fddd87267fa538236f96"
  },
  {
    location: "North Leeds",
    bird_id: 2,
    bird_name: "House Sparrow (Male)",
    features: { wingspan: 23, head: "Grey", back: "Brown", chest: "Cream" },
    user_id: 1,
    img_url:
      "https://nppicturestorage.s3.eu-west-2.amazonaws.com/aCcndxYxTKmLj5bR4h7moP.jpeg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMiJHMEUCIGHlmbCNk9guuNpE73zQJj0vKDsHY9AZ4JfymLWMleRQAiEAi8nAntSd5WJhufzQTxLdCXD1QL1WcBR6m0TAIqEwuYsq%2FQEILhAAGgw0ODQxNzgwMDM3NzUiDLJMNEkvsiqgLXhVSiraASoLkoFEgXH%2F929Onz5Kuiq3kB%2BxBLfp3%2FViFn4F5rm4mctS9mOIyjnYQ4D0yG%2F7f9HyBhcjhZZ3YVOK2iNURUEmcSWNIkJwjslNu8wIoM8hEpPIMDGgceXF6s3apkhdK95J6yUOQc10HOuDDZixu2Y7rSEShUc2jMiqLsmpwVlPSNuIOjmkHNu7KpHqM71BBAVC3IbRC0j%2FS4eVB6zw7Wmr9YUZR9KL%2BQEbGTXoBgOsRGhFDE30fGIekeWE451s7CBFa1W%2BjB%2BXlUlYcntW7S%2F0xLM7zXCxX7svMOzFr%2FUFOvACeSS%2Bs%2FrLB6l0xovrDJiz2icSoN49jw%2FobfcdlzNp%2FJZTTFPz51eG3Jki5FWCP9x%2FMfRTAXC5K7QY%2FfOmDvVlfdxoDqnWsr2wsr7WNxjOUjMvCBwpaMbk9CDWRYLgJYiQUZN%2B5EKd9%2BC%2FxCtmvUK4ol7bhMcEvj0GXYCcF5XlkZ0BjDUDYBLbbraRy1mOHO2Hv8wtQq2YYFQzilHT5r0wQCCQhhbUHFQZWLK4yH98IfmqwbIgJ5WlroGZBStE7fv%2Bhc2X8Eteut3%2BiWuw6MO1rxXg4NoMI1yFF9L0BuPOfsp6a4IdYfPkCvY8BEhRypP15Bx7C8y%2BbbUsDhNwvTMHgdpdKupHjGUZnKJvo1uEJsjSSJSPqu7S4sPMMi4Cv8k2%2FJxLrT8JQQoU7BLCTD2p3E1xgRYjB4Sg64Bdonvw2J9NYWqhc1PM3MZjLd7hN1VonfU9oW62%2B27ucKKQURqEB6KQcX34jlwatMuGLXtrUJQ%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20200501T125955Z&X-Amz-SignedHeaders=host&X-Amz-Expires=299&X-Amz-Credential=ASIAXBO2CA47QA5CUGKJ%2F20200501%2Feu-west-2%2Fs3%2Faws4_request&X-Amz-Signature=d643a321f6c248d68be2532aae715fe483bda37640e6fddd87267fa538236f96"
  },
  {
    location: "North Leeds",
    bird_id: 3,
    bird_name: "House Sparrow (Female)",
    features: { wingspan: 23, head: "Brown", back: "Brown", chest: "Cream" },
    user_id: 1,
    img_url:
      "https://nppicturestorage.s3.eu-west-2.amazonaws.com/aCcndxYxTKmLj5bR4h7moP.jpeg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMiJHMEUCIGHlmbCNk9guuNpE73zQJj0vKDsHY9AZ4JfymLWMleRQAiEAi8nAntSd5WJhufzQTxLdCXD1QL1WcBR6m0TAIqEwuYsq%2FQEILhAAGgw0ODQxNzgwMDM3NzUiDLJMNEkvsiqgLXhVSiraASoLkoFEgXH%2F929Onz5Kuiq3kB%2BxBLfp3%2FViFn4F5rm4mctS9mOIyjnYQ4D0yG%2F7f9HyBhcjhZZ3YVOK2iNURUEmcSWNIkJwjslNu8wIoM8hEpPIMDGgceXF6s3apkhdK95J6yUOQc10HOuDDZixu2Y7rSEShUc2jMiqLsmpwVlPSNuIOjmkHNu7KpHqM71BBAVC3IbRC0j%2FS4eVB6zw7Wmr9YUZR9KL%2BQEbGTXoBgOsRGhFDE30fGIekeWE451s7CBFa1W%2BjB%2BXlUlYcntW7S%2F0xLM7zXCxX7svMOzFr%2FUFOvACeSS%2Bs%2FrLB6l0xovrDJiz2icSoN49jw%2FobfcdlzNp%2FJZTTFPz51eG3Jki5FWCP9x%2FMfRTAXC5K7QY%2FfOmDvVlfdxoDqnWsr2wsr7WNxjOUjMvCBwpaMbk9CDWRYLgJYiQUZN%2B5EKd9%2BC%2FxCtmvUK4ol7bhMcEvj0GXYCcF5XlkZ0BjDUDYBLbbraRy1mOHO2Hv8wtQq2YYFQzilHT5r0wQCCQhhbUHFQZWLK4yH98IfmqwbIgJ5WlroGZBStE7fv%2Bhc2X8Eteut3%2BiWuw6MO1rxXg4NoMI1yFF9L0BuPOfsp6a4IdYfPkCvY8BEhRypP15Bx7C8y%2BbbUsDhNwvTMHgdpdKupHjGUZnKJvo1uEJsjSSJSPqu7S4sPMMi4Cv8k2%2FJxLrT8JQQoU7BLCTD2p3E1xgRYjB4Sg64Bdonvw2J9NYWqhc1PM3MZjLd7hN1VonfU9oW62%2B27ucKKQURqEB6KQcX34jlwatMuGLXtrUJQ%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20200501T125955Z&X-Amz-SignedHeaders=host&X-Amz-Expires=299&X-Amz-Credential=ASIAXBO2CA47QA5CUGKJ%2F20200501%2Feu-west-2%2Fs3%2Faws4_request&X-Amz-Signature=d643a321f6c248d68be2532aae715fe483bda37640e6fddd87267fa538236f96"
  },
  {
    location: "North Leeds",
    bird_id: 4,
    bird_name: "Carrion Crow",
    features: { wingspan: 100, head: "Black", back: "Black", chest: "Black" },
    user_id: 1,
    img_url:
      "https://nppicturestorage.s3.eu-west-2.amazonaws.com/aCcndxYxTKmLj5bR4h7moP.jpeg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMiJHMEUCIGHlmbCNk9guuNpE73zQJj0vKDsHY9AZ4JfymLWMleRQAiEAi8nAntSd5WJhufzQTxLdCXD1QL1WcBR6m0TAIqEwuYsq%2FQEILhAAGgw0ODQxNzgwMDM3NzUiDLJMNEkvsiqgLXhVSiraASoLkoFEgXH%2F929Onz5Kuiq3kB%2BxBLfp3%2FViFn4F5rm4mctS9mOIyjnYQ4D0yG%2F7f9HyBhcjhZZ3YVOK2iNURUEmcSWNIkJwjslNu8wIoM8hEpPIMDGgceXF6s3apkhdK95J6yUOQc10HOuDDZixu2Y7rSEShUc2jMiqLsmpwVlPSNuIOjmkHNu7KpHqM71BBAVC3IbRC0j%2FS4eVB6zw7Wmr9YUZR9KL%2BQEbGTXoBgOsRGhFDE30fGIekeWE451s7CBFa1W%2BjB%2BXlUlYcntW7S%2F0xLM7zXCxX7svMOzFr%2FUFOvACeSS%2Bs%2FrLB6l0xovrDJiz2icSoN49jw%2FobfcdlzNp%2FJZTTFPz51eG3Jki5FWCP9x%2FMfRTAXC5K7QY%2FfOmDvVlfdxoDqnWsr2wsr7WNxjOUjMvCBwpaMbk9CDWRYLgJYiQUZN%2B5EKd9%2BC%2FxCtmvUK4ol7bhMcEvj0GXYCcF5XlkZ0BjDUDYBLbbraRy1mOHO2Hv8wtQq2YYFQzilHT5r0wQCCQhhbUHFQZWLK4yH98IfmqwbIgJ5WlroGZBStE7fv%2Bhc2X8Eteut3%2BiWuw6MO1rxXg4NoMI1yFF9L0BuPOfsp6a4IdYfPkCvY8BEhRypP15Bx7C8y%2BbbUsDhNwvTMHgdpdKupHjGUZnKJvo1uEJsjSSJSPqu7S4sPMMi4Cv8k2%2FJxLrT8JQQoU7BLCTD2p3E1xgRYjB4Sg64Bdonvw2J9NYWqhc1PM3MZjLd7hN1VonfU9oW62%2B27ucKKQURqEB6KQcX34jlwatMuGLXtrUJQ%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20200501T125955Z&X-Amz-SignedHeaders=host&X-Amz-Expires=299&X-Amz-Credential=ASIAXBO2CA47QA5CUGKJ%2F20200501%2Feu-west-2%2Fs3%2Faws4_request&X-Amz-Signature=d643a321f6c248d68be2532aae715fe483bda37640e6fddd87267fa538236f96"
  },
  {
    location: "North Leeds",
    bird_id: 5,
    bird_name: "Magpie",
    features: { wingspan: 55, head: "Black", back: "Black", chest: "White" },
    user_id: 1,
    img_url:
      "https://nppicturestorage.s3.eu-west-2.amazonaws.com/aCcndxYxTKmLj5bR4h7moP.jpeg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMiJHMEUCIGHlmbCNk9guuNpE73zQJj0vKDsHY9AZ4JfymLWMleRQAiEAi8nAntSd5WJhufzQTxLdCXD1QL1WcBR6m0TAIqEwuYsq%2FQEILhAAGgw0ODQxNzgwMDM3NzUiDLJMNEkvsiqgLXhVSiraASoLkoFEgXH%2F929Onz5Kuiq3kB%2BxBLfp3%2FViFn4F5rm4mctS9mOIyjnYQ4D0yG%2F7f9HyBhcjhZZ3YVOK2iNURUEmcSWNIkJwjslNu8wIoM8hEpPIMDGgceXF6s3apkhdK95J6yUOQc10HOuDDZixu2Y7rSEShUc2jMiqLsmpwVlPSNuIOjmkHNu7KpHqM71BBAVC3IbRC0j%2FS4eVB6zw7Wmr9YUZR9KL%2BQEbGTXoBgOsRGhFDE30fGIekeWE451s7CBFa1W%2BjB%2BXlUlYcntW7S%2F0xLM7zXCxX7svMOzFr%2FUFOvACeSS%2Bs%2FrLB6l0xovrDJiz2icSoN49jw%2FobfcdlzNp%2FJZTTFPz51eG3Jki5FWCP9x%2FMfRTAXC5K7QY%2FfOmDvVlfdxoDqnWsr2wsr7WNxjOUjMvCBwpaMbk9CDWRYLgJYiQUZN%2B5EKd9%2BC%2FxCtmvUK4ol7bhMcEvj0GXYCcF5XlkZ0BjDUDYBLbbraRy1mOHO2Hv8wtQq2YYFQzilHT5r0wQCCQhhbUHFQZWLK4yH98IfmqwbIgJ5WlroGZBStE7fv%2Bhc2X8Eteut3%2BiWuw6MO1rxXg4NoMI1yFF9L0BuPOfsp6a4IdYfPkCvY8BEhRypP15Bx7C8y%2BbbUsDhNwvTMHgdpdKupHjGUZnKJvo1uEJsjSSJSPqu7S4sPMMi4Cv8k2%2FJxLrT8JQQoU7BLCTD2p3E1xgRYjB4Sg64Bdonvw2J9NYWqhc1PM3MZjLd7hN1VonfU9oW62%2B27ucKKQURqEB6KQcX34jlwatMuGLXtrUJQ%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20200501T125955Z&X-Amz-SignedHeaders=host&X-Amz-Expires=299&X-Amz-Credential=ASIAXBO2CA47QA5CUGKJ%2F20200501%2Feu-west-2%2Fs3%2Faws4_request&X-Amz-Signature=d643a321f6c248d68be2532aae715fe483bda37640e6fddd87267fa538236f96"
  },
  {
    location: "North Leeds",
    bird_id: 6,
    bird_name: "Jackdaw",
    features: { wingspan: 70, head: "Grey", back: "Black", chest: "Grey" },
    user_id: 1,
    img_url:
      "https://nppicturestorage.s3.eu-west-2.amazonaws.com/aCcndxYxTKmLj5bR4h7moP.jpeg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMiJHMEUCIGHlmbCNk9guuNpE73zQJj0vKDsHY9AZ4JfymLWMleRQAiEAi8nAntSd5WJhufzQTxLdCXD1QL1WcBR6m0TAIqEwuYsq%2FQEILhAAGgw0ODQxNzgwMDM3NzUiDLJMNEkvsiqgLXhVSiraASoLkoFEgXH%2F929Onz5Kuiq3kB%2BxBLfp3%2FViFn4F5rm4mctS9mOIyjnYQ4D0yG%2F7f9HyBhcjhZZ3YVOK2iNURUEmcSWNIkJwjslNu8wIoM8hEpPIMDGgceXF6s3apkhdK95J6yUOQc10HOuDDZixu2Y7rSEShUc2jMiqLsmpwVlPSNuIOjmkHNu7KpHqM71BBAVC3IbRC0j%2FS4eVB6zw7Wmr9YUZR9KL%2BQEbGTXoBgOsRGhFDE30fGIekeWE451s7CBFa1W%2BjB%2BXlUlYcntW7S%2F0xLM7zXCxX7svMOzFr%2FUFOvACeSS%2Bs%2FrLB6l0xovrDJiz2icSoN49jw%2FobfcdlzNp%2FJZTTFPz51eG3Jki5FWCP9x%2FMfRTAXC5K7QY%2FfOmDvVlfdxoDqnWsr2wsr7WNxjOUjMvCBwpaMbk9CDWRYLgJYiQUZN%2B5EKd9%2BC%2FxCtmvUK4ol7bhMcEvj0GXYCcF5XlkZ0BjDUDYBLbbraRy1mOHO2Hv8wtQq2YYFQzilHT5r0wQCCQhhbUHFQZWLK4yH98IfmqwbIgJ5WlroGZBStE7fv%2Bhc2X8Eteut3%2BiWuw6MO1rxXg4NoMI1yFF9L0BuPOfsp6a4IdYfPkCvY8BEhRypP15Bx7C8y%2BbbUsDhNwvTMHgdpdKupHjGUZnKJvo1uEJsjSSJSPqu7S4sPMMi4Cv8k2%2FJxLrT8JQQoU7BLCTD2p3E1xgRYjB4Sg64Bdonvw2J9NYWqhc1PM3MZjLd7hN1VonfU9oW62%2B27ucKKQURqEB6KQcX34jlwatMuGLXtrUJQ%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20200501T125955Z&X-Amz-SignedHeaders=host&X-Amz-Expires=299&X-Amz-Credential=ASIAXBO2CA47QA5CUGKJ%2F20200501%2Feu-west-2%2Fs3%2Faws4_request&X-Amz-Signature=d643a321f6c248d68be2532aae715fe483bda37640e6fddd87267fa538236f96"
  },
  {
    location: "North Leeds",
    bird_id: 7,
    bird_name: "Robin",
    features: { wingspan: 21, head: "Brown", back: "Brown", chest: "Red" },
    user_id: 1,
    img_url:
      "https://nppicturestorage.s3.eu-west-2.amazonaws.com/aCcndxYxTKmLj5bR4h7moP.jpeg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMiJHMEUCIGHlmbCNk9guuNpE73zQJj0vKDsHY9AZ4JfymLWMleRQAiEAi8nAntSd5WJhufzQTxLdCXD1QL1WcBR6m0TAIqEwuYsq%2FQEILhAAGgw0ODQxNzgwMDM3NzUiDLJMNEkvsiqgLXhVSiraASoLkoFEgXH%2F929Onz5Kuiq3kB%2BxBLfp3%2FViFn4F5rm4mctS9mOIyjnYQ4D0yG%2F7f9HyBhcjhZZ3YVOK2iNURUEmcSWNIkJwjslNu8wIoM8hEpPIMDGgceXF6s3apkhdK95J6yUOQc10HOuDDZixu2Y7rSEShUc2jMiqLsmpwVlPSNuIOjmkHNu7KpHqM71BBAVC3IbRC0j%2FS4eVB6zw7Wmr9YUZR9KL%2BQEbGTXoBgOsRGhFDE30fGIekeWE451s7CBFa1W%2BjB%2BXlUlYcntW7S%2F0xLM7zXCxX7svMOzFr%2FUFOvACeSS%2Bs%2FrLB6l0xovrDJiz2icSoN49jw%2FobfcdlzNp%2FJZTTFPz51eG3Jki5FWCP9x%2FMfRTAXC5K7QY%2FfOmDvVlfdxoDqnWsr2wsr7WNxjOUjMvCBwpaMbk9CDWRYLgJYiQUZN%2B5EKd9%2BC%2FxCtmvUK4ol7bhMcEvj0GXYCcF5XlkZ0BjDUDYBLbbraRy1mOHO2Hv8wtQq2YYFQzilHT5r0wQCCQhhbUHFQZWLK4yH98IfmqwbIgJ5WlroGZBStE7fv%2Bhc2X8Eteut3%2BiWuw6MO1rxXg4NoMI1yFF9L0BuPOfsp6a4IdYfPkCvY8BEhRypP15Bx7C8y%2BbbUsDhNwvTMHgdpdKupHjGUZnKJvo1uEJsjSSJSPqu7S4sPMMi4Cv8k2%2FJxLrT8JQQoU7BLCTD2p3E1xgRYjB4Sg64Bdonvw2J9NYWqhc1PM3MZjLd7hN1VonfU9oW62%2B27ucKKQURqEB6KQcX34jlwatMuGLXtrUJQ%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20200501T125955Z&X-Amz-SignedHeaders=host&X-Amz-Expires=299&X-Amz-Credential=ASIAXBO2CA47QA5CUGKJ%2F20200501%2Feu-west-2%2Fs3%2Faws4_request&X-Amz-Signature=d643a321f6c248d68be2532aae715fe483bda37640e6fddd87267fa538236f96"
  },
  {
    location: "North Leeds",
    bird_id: 8,
    bird_name: "Red Kite",
    features: {
      wingspan: 180,
      head: "White",
      back: "Orange",
      chest: "Orange"
    },
    user_id: 1,
    img_url:
      "https://nppicturestorage.s3.eu-west-2.amazonaws.com/aCcndxYxTKmLj5bR4h7moP.jpeg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMiJHMEUCIGHlmbCNk9guuNpE73zQJj0vKDsHY9AZ4JfymLWMleRQAiEAi8nAntSd5WJhufzQTxLdCXD1QL1WcBR6m0TAIqEwuYsq%2FQEILhAAGgw0ODQxNzgwMDM3NzUiDLJMNEkvsiqgLXhVSiraASoLkoFEgXH%2F929Onz5Kuiq3kB%2BxBLfp3%2FViFn4F5rm4mctS9mOIyjnYQ4D0yG%2F7f9HyBhcjhZZ3YVOK2iNURUEmcSWNIkJwjslNu8wIoM8hEpPIMDGgceXF6s3apkhdK95J6yUOQc10HOuDDZixu2Y7rSEShUc2jMiqLsmpwVlPSNuIOjmkHNu7KpHqM71BBAVC3IbRC0j%2FS4eVB6zw7Wmr9YUZR9KL%2BQEbGTXoBgOsRGhFDE30fGIekeWE451s7CBFa1W%2BjB%2BXlUlYcntW7S%2F0xLM7zXCxX7svMOzFr%2FUFOvACeSS%2Bs%2FrLB6l0xovrDJiz2icSoN49jw%2FobfcdlzNp%2FJZTTFPz51eG3Jki5FWCP9x%2FMfRTAXC5K7QY%2FfOmDvVlfdxoDqnWsr2wsr7WNxjOUjMvCBwpaMbk9CDWRYLgJYiQUZN%2B5EKd9%2BC%2FxCtmvUK4ol7bhMcEvj0GXYCcF5XlkZ0BjDUDYBLbbraRy1mOHO2Hv8wtQq2YYFQzilHT5r0wQCCQhhbUHFQZWLK4yH98IfmqwbIgJ5WlroGZBStE7fv%2Bhc2X8Eteut3%2BiWuw6MO1rxXg4NoMI1yFF9L0BuPOfsp6a4IdYfPkCvY8BEhRypP15Bx7C8y%2BbbUsDhNwvTMHgdpdKupHjGUZnKJvo1uEJsjSSJSPqu7S4sPMMi4Cv8k2%2FJxLrT8JQQoU7BLCTD2p3E1xgRYjB4Sg64Bdonvw2J9NYWqhc1PM3MZjLd7hN1VonfU9oW62%2B27ucKKQURqEB6KQcX34jlwatMuGLXtrUJQ%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20200501T125955Z&X-Amz-SignedHeaders=host&X-Amz-Expires=299&X-Amz-Credential=ASIAXBO2CA47QA5CUGKJ%2F20200501%2Feu-west-2%2Fs3%2Faws4_request&X-Amz-Signature=d643a321f6c248d68be2532aae715fe483bda37640e6fddd87267fa538236f96"
  },
  {
    location: "North Leeds",
    bird_id: 9,
    bird_name: "Kestrel",
    features: { wingspan: 75, head: "Grey", back: "Orange", chest: "White" },
    user_id: 1,
    img_url:
      "https://nppicturestorage.s3.eu-west-2.amazonaws.com/aCcndxYxTKmLj5bR4h7moP.jpeg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMiJHMEUCIGHlmbCNk9guuNpE73zQJj0vKDsHY9AZ4JfymLWMleRQAiEAi8nAntSd5WJhufzQTxLdCXD1QL1WcBR6m0TAIqEwuYsq%2FQEILhAAGgw0ODQxNzgwMDM3NzUiDLJMNEkvsiqgLXhVSiraASoLkoFEgXH%2F929Onz5Kuiq3kB%2BxBLfp3%2FViFn4F5rm4mctS9mOIyjnYQ4D0yG%2F7f9HyBhcjhZZ3YVOK2iNURUEmcSWNIkJwjslNu8wIoM8hEpPIMDGgceXF6s3apkhdK95J6yUOQc10HOuDDZixu2Y7rSEShUc2jMiqLsmpwVlPSNuIOjmkHNu7KpHqM71BBAVC3IbRC0j%2FS4eVB6zw7Wmr9YUZR9KL%2BQEbGTXoBgOsRGhFDE30fGIekeWE451s7CBFa1W%2BjB%2BXlUlYcntW7S%2F0xLM7zXCxX7svMOzFr%2FUFOvACeSS%2Bs%2FrLB6l0xovrDJiz2icSoN49jw%2FobfcdlzNp%2FJZTTFPz51eG3Jki5FWCP9x%2FMfRTAXC5K7QY%2FfOmDvVlfdxoDqnWsr2wsr7WNxjOUjMvCBwpaMbk9CDWRYLgJYiQUZN%2B5EKd9%2BC%2FxCtmvUK4ol7bhMcEvj0GXYCcF5XlkZ0BjDUDYBLbbraRy1mOHO2Hv8wtQq2YYFQzilHT5r0wQCCQhhbUHFQZWLK4yH98IfmqwbIgJ5WlroGZBStE7fv%2Bhc2X8Eteut3%2BiWuw6MO1rxXg4NoMI1yFF9L0BuPOfsp6a4IdYfPkCvY8BEhRypP15Bx7C8y%2BbbUsDhNwvTMHgdpdKupHjGUZnKJvo1uEJsjSSJSPqu7S4sPMMi4Cv8k2%2FJxLrT8JQQoU7BLCTD2p3E1xgRYjB4Sg64Bdonvw2J9NYWqhc1PM3MZjLd7hN1VonfU9oW62%2B27ucKKQURqEB6KQcX34jlwatMuGLXtrUJQ%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20200501T125955Z&X-Amz-SignedHeaders=host&X-Amz-Expires=299&X-Amz-Credential=ASIAXBO2CA47QA5CUGKJ%2F20200501%2Feu-west-2%2Fs3%2Faws4_request&X-Amz-Signature=d643a321f6c248d68be2532aae715fe483bda37640e6fddd87267fa538236f96"
  },
  {
    location: "North Leeds",
    bird_id: 10,
    bird_name: "Rock Dove",
    features: { wingspan: 67, head: "Grey", back: "Grey", chest: "Grey" },
    user_id: 1,
    img_url:
      "https://nppicturestorage.s3.eu-west-2.amazonaws.com/aCcndxYxTKmLj5bR4h7moP.jpeg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMiJHMEUCIGHlmbCNk9guuNpE73zQJj0vKDsHY9AZ4JfymLWMleRQAiEAi8nAntSd5WJhufzQTxLdCXD1QL1WcBR6m0TAIqEwuYsq%2FQEILhAAGgw0ODQxNzgwMDM3NzUiDLJMNEkvsiqgLXhVSiraASoLkoFEgXH%2F929Onz5Kuiq3kB%2BxBLfp3%2FViFn4F5rm4mctS9mOIyjnYQ4D0yG%2F7f9HyBhcjhZZ3YVOK2iNURUEmcSWNIkJwjslNu8wIoM8hEpPIMDGgceXF6s3apkhdK95J6yUOQc10HOuDDZixu2Y7rSEShUc2jMiqLsmpwVlPSNuIOjmkHNu7KpHqM71BBAVC3IbRC0j%2FS4eVB6zw7Wmr9YUZR9KL%2BQEbGTXoBgOsRGhFDE30fGIekeWE451s7CBFa1W%2BjB%2BXlUlYcntW7S%2F0xLM7zXCxX7svMOzFr%2FUFOvACeSS%2Bs%2FrLB6l0xovrDJiz2icSoN49jw%2FobfcdlzNp%2FJZTTFPz51eG3Jki5FWCP9x%2FMfRTAXC5K7QY%2FfOmDvVlfdxoDqnWsr2wsr7WNxjOUjMvCBwpaMbk9CDWRYLgJYiQUZN%2B5EKd9%2BC%2FxCtmvUK4ol7bhMcEvj0GXYCcF5XlkZ0BjDUDYBLbbraRy1mOHO2Hv8wtQq2YYFQzilHT5r0wQCCQhhbUHFQZWLK4yH98IfmqwbIgJ5WlroGZBStE7fv%2Bhc2X8Eteut3%2BiWuw6MO1rxXg4NoMI1yFF9L0BuPOfsp6a4IdYfPkCvY8BEhRypP15Bx7C8y%2BbbUsDhNwvTMHgdpdKupHjGUZnKJvo1uEJsjSSJSPqu7S4sPMMi4Cv8k2%2FJxLrT8JQQoU7BLCTD2p3E1xgRYjB4Sg64Bdonvw2J9NYWqhc1PM3MZjLd7hN1VonfU9oW62%2B27ucKKQURqEB6KQcX34jlwatMuGLXtrUJQ%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20200501T125955Z&X-Amz-SignedHeaders=host&X-Amz-Expires=299&X-Amz-Credential=ASIAXBO2CA47QA5CUGKJ%2F20200501%2Feu-west-2%2Fs3%2Faws4_request&X-Amz-Signature=d643a321f6c248d68be2532aae715fe483bda37640e6fddd87267fa538236f96"
  },
  {
    location: "North Leeds",
    bird_id: 11,
    bird_name: "Blue Tit",
    features: { wingspan: 18, head: "Blue", back: "Blue", chest: "Yellow" },
    user_id: 1,
    img_url:
      "https://nppicturestorage.s3.eu-west-2.amazonaws.com/aCcndxYxTKmLj5bR4h7moP.jpeg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMiJHMEUCIGHlmbCNk9guuNpE73zQJj0vKDsHY9AZ4JfymLWMleRQAiEAi8nAntSd5WJhufzQTxLdCXD1QL1WcBR6m0TAIqEwuYsq%2FQEILhAAGgw0ODQxNzgwMDM3NzUiDLJMNEkvsiqgLXhVSiraASoLkoFEgXH%2F929Onz5Kuiq3kB%2BxBLfp3%2FViFn4F5rm4mctS9mOIyjnYQ4D0yG%2F7f9HyBhcjhZZ3YVOK2iNURUEmcSWNIkJwjslNu8wIoM8hEpPIMDGgceXF6s3apkhdK95J6yUOQc10HOuDDZixu2Y7rSEShUc2jMiqLsmpwVlPSNuIOjmkHNu7KpHqM71BBAVC3IbRC0j%2FS4eVB6zw7Wmr9YUZR9KL%2BQEbGTXoBgOsRGhFDE30fGIekeWE451s7CBFa1W%2BjB%2BXlUlYcntW7S%2F0xLM7zXCxX7svMOzFr%2FUFOvACeSS%2Bs%2FrLB6l0xovrDJiz2icSoN49jw%2FobfcdlzNp%2FJZTTFPz51eG3Jki5FWCP9x%2FMfRTAXC5K7QY%2FfOmDvVlfdxoDqnWsr2wsr7WNxjOUjMvCBwpaMbk9CDWRYLgJYiQUZN%2B5EKd9%2BC%2FxCtmvUK4ol7bhMcEvj0GXYCcF5XlkZ0BjDUDYBLbbraRy1mOHO2Hv8wtQq2YYFQzilHT5r0wQCCQhhbUHFQZWLK4yH98IfmqwbIgJ5WlroGZBStE7fv%2Bhc2X8Eteut3%2BiWuw6MO1rxXg4NoMI1yFF9L0BuPOfsp6a4IdYfPkCvY8BEhRypP15Bx7C8y%2BbbUsDhNwvTMHgdpdKupHjGUZnKJvo1uEJsjSSJSPqu7S4sPMMi4Cv8k2%2FJxLrT8JQQoU7BLCTD2p3E1xgRYjB4Sg64Bdonvw2J9NYWqhc1PM3MZjLd7hN1VonfU9oW62%2B27ucKKQURqEB6KQcX34jlwatMuGLXtrUJQ%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20200501T125955Z&X-Amz-SignedHeaders=host&X-Amz-Expires=299&X-Amz-Credential=ASIAXBO2CA47QA5CUGKJ%2F20200501%2Feu-west-2%2Fs3%2Faws4_request&X-Amz-Signature=d643a321f6c248d68be2532aae715fe483bda37640e6fddd87267fa538236f96"
  },
  {
    location: "North Leeds",
    bird_id: 12,
    bird_name: "Blue Tit (juvenile)",
    features: { wingspan: 18, head: "Green", back: "Green", chest: "Yellow" },
    user_id: 1,
    img_url:
      "https://nppicturestorage.s3.eu-west-2.amazonaws.com/aCcndxYxTKmLj5bR4h7moP.jpeg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMiJHMEUCIGHlmbCNk9guuNpE73zQJj0vKDsHY9AZ4JfymLWMleRQAiEAi8nAntSd5WJhufzQTxLdCXD1QL1WcBR6m0TAIqEwuYsq%2FQEILhAAGgw0ODQxNzgwMDM3NzUiDLJMNEkvsiqgLXhVSiraASoLkoFEgXH%2F929Onz5Kuiq3kB%2BxBLfp3%2FViFn4F5rm4mctS9mOIyjnYQ4D0yG%2F7f9HyBhcjhZZ3YVOK2iNURUEmcSWNIkJwjslNu8wIoM8hEpPIMDGgceXF6s3apkhdK95J6yUOQc10HOuDDZixu2Y7rSEShUc2jMiqLsmpwVlPSNuIOjmkHNu7KpHqM71BBAVC3IbRC0j%2FS4eVB6zw7Wmr9YUZR9KL%2BQEbGTXoBgOsRGhFDE30fGIekeWE451s7CBFa1W%2BjB%2BXlUlYcntW7S%2F0xLM7zXCxX7svMOzFr%2FUFOvACeSS%2Bs%2FrLB6l0xovrDJiz2icSoN49jw%2FobfcdlzNp%2FJZTTFPz51eG3Jki5FWCP9x%2FMfRTAXC5K7QY%2FfOmDvVlfdxoDqnWsr2wsr7WNxjOUjMvCBwpaMbk9CDWRYLgJYiQUZN%2B5EKd9%2BC%2FxCtmvUK4ol7bhMcEvj0GXYCcF5XlkZ0BjDUDYBLbbraRy1mOHO2Hv8wtQq2YYFQzilHT5r0wQCCQhhbUHFQZWLK4yH98IfmqwbIgJ5WlroGZBStE7fv%2Bhc2X8Eteut3%2BiWuw6MO1rxXg4NoMI1yFF9L0BuPOfsp6a4IdYfPkCvY8BEhRypP15Bx7C8y%2BbbUsDhNwvTMHgdpdKupHjGUZnKJvo1uEJsjSSJSPqu7S4sPMMi4Cv8k2%2FJxLrT8JQQoU7BLCTD2p3E1xgRYjB4Sg64Bdonvw2J9NYWqhc1PM3MZjLd7hN1VonfU9oW62%2B27ucKKQURqEB6KQcX34jlwatMuGLXtrUJQ%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20200501T125955Z&X-Amz-SignedHeaders=host&X-Amz-Expires=299&X-Amz-Credential=ASIAXBO2CA47QA5CUGKJ%2F20200501%2Feu-west-2%2Fs3%2Faws4_request&X-Amz-Signature=d643a321f6c248d68be2532aae715fe483bda37640e6fddd87267fa538236f96"
  }
];

module.exports = SamsBirds;
