const DEFAULT_DESIGN_VARIANT = 'var1'

export type DesignVariant = 'var1' | 'var2'

export default function useDesignVariant(): { designVariant: ComputedRef<'var1' | 'var2'> } {
  const route = useRoute()
  const abTestParam = route.query.abtest

  const designVariant: ComputedRef<'var1' | 'var2'> = computed(() => {
    if (abTestParam === 'var1' || abTestParam === 'var2') return abTestParam
    if (abTestParam === 'test') {
      return Math.random() > 0.5 ? 'var1' : 'var2'
    }

    if (!abTestParam) {
        return DEFAULT_DESIGN_VARIANT
    }

    console.warn('Invalid abtest param:', abTestParam)
    // Default
    return DEFAULT_DESIGN_VARIANT
  })

  return {
    designVariant
  }
}