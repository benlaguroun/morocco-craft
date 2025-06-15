import { jewelryProducts } from "./jewelry";
import { bagsProducts } from "./bags";
import { accessoriesProducts } from "./accessories";

export const allProducts = [
  ...jewelryProducts,
  ...bagsProducts,
  ...accessoriesProducts,
];

export const featuredProducts = [
  jewelryProducts[0], // Berber Silver Ring
  bagsProducts[0], // Handwoven Tote Bag
  jewelryProducts[1], // Enamel Mosaic Earrings
];

export { jewelryProducts, bagsProducts, accessoriesProducts };
