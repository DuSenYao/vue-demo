<script>
import { check } from '@/utils/auth';
export default {
  functional: true,
  props: {
    authority: {
      type: Array,
      require: true,
      default: null
    }
  },
  render(h, { props, scopedSlots }) {
    return check(props.authority) ? scopedSlots.default() : null;
  }
};
</script>

<style lang="scss">
// only
</style>
