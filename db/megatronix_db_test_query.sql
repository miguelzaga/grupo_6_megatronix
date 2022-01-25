use megatronix_db;

select u.email email, ucat.category user, p.name product, pc.category category, pp.promotion promotion
from Users u
join UserCategories ucat on u.user_category_id = ucat.id 
join ProductsInCarts pic on u.id = pic.user_id
join Products p on pic.product_id = p.id
join ProductCategories pc on p.product_category_id = pc.id
join ProductPromotions pp on p.product_promotion_id = pp.id;