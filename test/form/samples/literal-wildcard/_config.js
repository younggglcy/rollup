module.exports = defineTest({
	description: 'literal wildcard should not be treated as namespace re-exports operator',
	options: {
		external: ['external']
	}
});
