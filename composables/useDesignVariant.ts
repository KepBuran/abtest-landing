export type DesignVariant = 'var1' | 'var2'

export function useDesignVariant(): { designVariant: Ref<DesignVariant>, setDesignVariant: (variant: DesignVariant) => void } {
  const designVariant: Ref<DesignVariant> = useState<DesignVariant>('designVariant', () => 'var1')
  const setDesignVariant = (variant: DesignVariant) => {
    designVariant.value = variant
  }

  return {
    designVariant,
    setDesignVariant,
  }
}