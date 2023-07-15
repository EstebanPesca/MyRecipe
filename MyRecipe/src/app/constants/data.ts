import { CatalogData } from "../interface/data";

// Exporting data with information aboout every recipe, name, url-image, description, process and ingredients

export const contentCatalog: CatalogData[] = [
  {
    name: 'Hamburguesas',
    image: '../../../assets/hamburguesas.jpg',
    description: 'Receta de cómo preparar una hamburguesa',
    recipe: 'Para realizar una hamburguesa, necesitaremos carne molida, pan y queso. Si deseas colocar algo adicional a tu hamburguesa (pepinillos, huevos, beicon, piña), eres libre de hacerlo.',
    ingredients: [
      "500 gramos de carne molida (preferiblemente de res)",
      "1 huevo",
      "1/4 de taza de pan rallado",
      "1 cebolla pequeña, finamente picada",
      "2 dientes de ajo, machacados",
      "1 cucharadita de sal",
      "1/2 cucharadita de pimienta negra molida",
      "4 panes de hamburguesa",
      "Ingredientes adicionales a tu gusto: queso, lechuga, tomate, cebolla, tocino, etc."
    ]
  },
  {
    name: 'Macarrones con queso',
    image: '../../../assets/macarrones-queso.webp',
    description: 'Receta de cómo preparar macarrones con queso',
    recipe: 'Los macarrones con queso son un plato clásico que combina macarrones cocidos al dente con una deliciosa salsa de queso cremosa. Es un plato reconfortante y sabroso que se puede disfrutar como plato principal o acompañamiento.',
    ingredients: [
      "250 gramos de macarrones",
      "2 tazas de queso cheddar rallado",
      "2 tazas de leche",
      "2 cucharadas de mantequilla",
      "1 cucharadita de mostaza",
      "Sal y pimienta al gusto"
    ]
  },
  {
    name: 'Macarrones a la carbonara',
    image: '../../../assets/macarrones-salsa.webp',
    description: 'Receta de cómo preparar macarrones a la carbonara',
    recipe: 'Los macarrones a la carbonara son una receta clásica de la cocina italiana. Se preparan con una salsa cremosa a base de huevo, queso parmesano, panceta y pimienta negra. Es un plato lleno de sabor y fácil de hacer.',
    ingredients: [
      "250 gramos de macarrones",
      "100 gramos de panceta o beicon",
      "2 yemas de huevo",
      "1/2 taza de queso parmesano rallado",
      "Pimienta negra molida al gusto",
      "Sal al gusto"
    ]
  },
  {
    name: 'Nugets con salsa BBQ y Miel',
    image: '../../../assets/nugets-miel-bbq.webp',
    description: 'Receta de cómo preparar nugets con salsa BBQ y miel',
    recipe: 'Los nugets con salsa BBQ y miel son una opción deliciosa para disfrutar como aperitivo o plato principal. Los nugets se preparan con trozos de pollo empanizados y se sirven con una irresistible salsa agridulce de barbacoa y miel.',
    ingredients: [
      "500 gramos de pechugas de pollo, cortadas en trozos",
      "1 taza de pan rallado",
      "1/2 taza de harina",
      "2 huevos, batidos",
      "1/4 de taza de salsa barbacoa",
      "2 cucharadas de miel",
      "Sal y pimienta al gusto"
    ]
  },
  {
    name: 'Costillas con BBQ',
    image: '../../../assets/costillas-bbq.webp',
    description: 'Receta de cómo preparar costillas con salsa BBQ',
    recipe: 'Las costillas con salsa BBQ son un plato clásico de la cocina estadounidense. Se cocinan lentamente para que queden tiernas y se sirven con una deliciosa salsa barbacoa casera. Son ideales para disfrutar en reuniones y barbacoas.',
    ingredients: [
      "1 rack de costillas de cerdo",
      "Sal y pimienta al gusto",
      "Para la salsa BBQ:",
      "1 taza de salsa de tomate",
      "2 cucharadas de salsa de soja",
      "2 cucharadas de vinagre",
      "2 cucharadas de azúcar moreno",
      "1 cucharada de mostaza",
      "1 cucharadita de ajo en polvo",
      "1 cucharadita de cebolla en polvo",
      "1/2 cucharadita de pimentón",
      "1/4 de cucharadita de pimienta de cayena (opcional)"
    ]
  },
  {
    name: 'Spaghettis con albóndigas',
    image: '../../../assets/spaguetis-albondigas.webp',
    description: 'Receta de cómo preparar spaghettis con albóndigas',
    recipe: 'Los spaghettis con albóndigas son un plato clásico de la cocina italiana. Consiste en una combinación de pasta al dente con albóndigas caseras en una salsa de tomate. Es un plato sabroso y reconfortante, perfecto para disfrutar en familia.',
    ingredients: [
      "250 gramos de spaghetti",
      "500 gramos de carne molida (mezcla de res y cerdo)",
      "1/2 taza de pan rallado",
      "1/4 de taza de queso parmesano rallado",
      "1 huevo",
      "2 dientes de ajo, picados",
      "1 cucharada de perejil picado",
      "1 lata de tomate triturado",
      "1 cebolla, picada",
      "2 cucharadas de aceite de oliva",
      "Sal y pimienta al gusto"
    ]
  },
  {
    name: 'Torta de chocolate',
    image: '../../../assets/torta-chocolate.webp',
    description: 'Receta de cómo preparar una deliciosa torta de chocolate',
    recipe: 'La torta de chocolate es un postre clásico y siempre apetitoso. Esta receta te enseñará a hacer una torta esponjosa y decadente, con un intenso sabor a chocolate. Ideal para cualquier ocasión especial o simplemente para darte un capricho.',
    ingredients: [
      "2 tazas de harina",
      "1 y 3/4 tazas de azúcar",
      "3/4 taza de cacao en polvo",
      "1 y 1/2 cucharaditas de polvo de hornear",
      "1 y 1/2 cucharaditas de bicarbonato de sodio",
      "1 cucharadita de sal",
      "2 huevos",
      "1 taza de leche",
      "1/2 taza de aceite vegetal",
      "2 cucharaditas de extracto de vainilla",
      "1 taza de agua hirviendo"
    ]
  }
];

