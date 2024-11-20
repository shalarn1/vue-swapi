export default {
	tableHeaders(recordType) {
		switch(true) {
		case recordType.startsWith('/films'):
			return [
				{ key: 'episode_id', name: 'Episode' },
        { key: 'title', name: 'Title' },
        { key: 'release_date', name: 'Release Date' },
        { key: 'director', name: 'Director' }, 
        { key: 'characters', name: 'Characters'},
      ];
		case recordType.startsWith('/people'):
			return [
        { key: 'name', name: 'Name' },
        { key: 'gender', name: 'Gender' },
        { key: 'birth_year', name: 'Birth Year' }, 
        { key: 'homeworld', name: 'Home World'},
      ]
    case recordType.startsWith('/vehicles'):
    	return [
        { key: 'name', name: 'Name & Model' },
        { key: 'manufacturer', name: 'Manufacturer' },
        { key: 'crew', name: 'Crew Size' },
        { key: 'passengers', name: 'Passenger Capacity' },
        { key: 'pilots', name: 'Pilots'},
      ]
    default:
    	return null
		}
	},

	detailsLinkFor(url) {
    const path = url.split('/').slice(-2).join('/')
    return '/' + path
  },

  areLinks(tableColumn) {
    return Array.isArray(tableColumn);
  },

  isLink(tableColumn) {
  	return typeof tableColumn === 'string' && tableColumn.startsWith('https:')
  },

  paginatedPath(path, query, page, limit) {
    if (query.page && query.limit) {
      return path + `?page=${query.page}&limit=${query.limit}`
    } else if (limit && page) {
      return path + `?page=${page}&limit=${limit}`
    } else {
      return path
    }
  }
}