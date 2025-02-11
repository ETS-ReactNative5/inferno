import { Component, Inferno } from 'inferno';
import { componentWillMove, AnimationClass } from './animations';

type AnimationProp = {
  animation?: string | AnimationClass;
  children?: Inferno.InfernoNode;
};

export class AnimatedMoveComponent<P = {}, S = {}> extends Component<AnimationProp & P, S> {
  public componentWillMove(parentVNode, parent: HTMLElement, dom: HTMLElement, props: any) {
    componentWillMove(parentVNode, parent, dom, props);
  }
}
