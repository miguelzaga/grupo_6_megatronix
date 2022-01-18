select u.first_name nombre, uc.name permiso, p.name producto, pc.name categoria, pp.name oferta  from Users u
join UsersProducts up on u.id = up.Users_id	
join Products p on p.id = up.Products_id
join UserCategories uc on uc.id = u.UserCategories_id
join ProductCategories pc on pc.id = p.ProductCategories_id
join ProductPromotions pp on pp.id = p.ProductPromotions_id