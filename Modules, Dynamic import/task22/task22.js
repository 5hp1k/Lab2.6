async function complete()
{
    await(await import('./Modules/readConfig.mjs')).default('myConfig')
    await(await import('./Modules/doQuery.mjs')).default('select * from cities');
    await(await import('./Modules/httpGet.mjs')).default('http://google.com');
    await(await import('./Modules/readFile.mjs')).default('README.md');
}

complete();