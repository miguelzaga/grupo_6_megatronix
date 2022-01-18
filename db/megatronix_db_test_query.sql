use megatronix_db;

select u.email email, ucat.category user, p.name product, pc.category category, pp.promotion promotion
from Users u
join UserCategories ucat on u.user_categories_id = ucat.id 
join UserCarts uc on u.id = uc.id
join ProductsInCarts pic on uc.id = pic.user_carts_id
join Products p on pic.products_id = p.id
join ProductCategories pc on p.product_categories_id = pc.id
join ProductPromotions pp on p.product_promotions_id = pp.id;