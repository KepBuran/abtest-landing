export default defineNuxtRouteMiddleware((to, from) => {
  if (process.client) {
    return
  }
  const abTestParam: string = to.query.abtest as string
  const { setDesignVariant } = useDesignVariant()
  
  if (abTestParam === 'var1' || abTestParam === 'var2') {
    setDesignVariant(abTestParam)
    return
  }
  
  if (!abTestParam) {
    setDesignVariant('var1')
    return
  }
  
  if (abTestParam === 'test') {
    setDesignVariant(Math.random() > 0.5 ? 'var1' : 'var2')
    return
  }
  
  setDesignVariant('var1')
})
  

