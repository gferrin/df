export function paginate(items, page, itemsPerPage) {
	const startIndex = (page - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	return items.slice(startIndex, endIndex);
}
