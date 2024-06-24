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
  
  
  if (abTestParam === 'test') {
    const designVariant = Math.random() > 0.5 ? 'var1' : 'var2'
    setDesignVariant(designVariant)
    
    // const router = useRouter()
    // router.push({ path: to.path, query: { abtest: designVariant } })
    // navigateTo(to.path + '?abtest=' + designVariant)
    return
  }
  
  // Default variant if no query parameter is set or if the query parameter is invalid
  setDesignVariant('var1')
})
  



