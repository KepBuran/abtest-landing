export type DesignVariant = 'pl' | 'ss'

export function useDesignVariant(): { designVariant: Ref<DesignVariant>, setDesignVariant: (variant: 'var1' | 'var2') => void } {
  const designVariant: Ref<DesignVariant> = useState<DesignVariant>('designVariant', () => 'pl')
  const setDesignVariant = (variant: 'var1' | 'var2') => {
    if (variant === 'var1') {
      designVariant.value = 'pl'
      return
    }

    if (variant === 'var2') {
      designVariant.value = 'ss'
      return
    }
  }

  return {
    designVariant,
    setDesignVariant,
  }
}