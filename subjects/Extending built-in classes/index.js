export function Base() {}
Base.prototype.value = () => 2
export class Derivated extends Base {
  constructor() {
    super();
  }
  sum() {
    return super.value();
  }
}
