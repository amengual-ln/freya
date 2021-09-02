const initialState = [
	{
		id: '1',
		briefcaseId: '1',
		name: 'Freya',
		description:
			'Esta app. Una especie de merge de los portfolios de Asana, con los docs de ClickUp, y cosas que siento que faltan en esos proyectos.',
		color: 'blue-400',
	},
	{
		id: '2',
		briefcaseId: '2',
		name: 'AdminUP',
		description:
			'Producto de Upya pensado para levantar y vender sistemas de administración modulares de forma rápida. En principio enfocandonos en las necesidades de un emprendimiento de cervezas local.',
		color: 'purple-900',
	},
	{
		id: '3',
		briefcaseId: '1',
		name: 'Oh Tea',
    description: 'De momento esto es solo un proyecto, pero en un futuro deberian ser varios. Web de la marca, tienda online, app, sistema de puntos/lealtad.',
		color: 'red-200',
	},
]

export default function state(state = initialState) {
	return state
}
