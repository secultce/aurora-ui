# Documentação de Decisões de Design - Mapinha Material Design

Este documento visa registrar e justificar as principais decisões de design tomadas durante o desenvolvimento da interface do Mapinha utilizando Material Design. Cada componente modificado ou adicionado será descrito com detalhes, incluindo o raciocínio por trás das mudanças.

## Componentes

### 1. Card

#### 1.1. Problema Identificado

Foi observado que o botão e seu ícone no Card estavam seguindo um estranho padrão de centralização, o que causava uma inconsistência visual quando estamos trabalhando com a responsividade.

#### 1.2. Análise da Versão Atual

A versão inicial, conforme apresentada no Figma, mostrava o botão e o ícone com essas proporções, quando trazemos a aplicação:

![card-current.png](images/card-from-figma.png)
> **Figura 1:** Versão do Figma com proporções irregulares.

Para resolver o problema, decidimos alinhar o botão e o ícone ao centro do card, conforme os princípios do Material Design. Essa alteração garante uma aparência mais consistente e alinhada com o restante da interface.

![card-current.png](images/card-current.png)
> **Figura 2:** Versão final com alinhamento corrigido.

#### 1.4. Justificativa

O alinhamento central foi escolhido para criar um visual mais harmonioso e melhorar a experiência do usuário, garantindo que os elementos no card estejam equilibrados e visualmente agradáveis.

## Referências
- [Material Design Guidelines](https://material.io/design/)

## Conclusão

As alterações documentadas neste arquivo visam melhorar a consistência visual e a experiência do usuário no Mapinha. Continuaremos a monitorar o impacto dessas mudanças e faremos ajustes conforme necessário.
