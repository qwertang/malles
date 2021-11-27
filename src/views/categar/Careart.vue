<!--  -->
<template>
  <div class="wrapper">
    <ul class="content">
      <li>表单1</li>
      <li>表单2</li>
      <li>表单3</li>
      <li>表单4</li>
      <li>表单5</li>
      <li>表单6</li>
      <li>表单7</li>
      <li>表单8</li>
      <li>表单9</li>
      <li>表单10</li>
      <li>表单11</li>
      <li>表单12</li>
      <li>表单13</li>
      <li>表单14</li>
      <li>表单15</li>
      <li>表单16</li>
      <li>表单17</li>
      <li>表单18</li>
      <li>表单19</li>
      <li>表单20</li>
      <li>表单21</li>
      <li>表单22</li>
      <li>表单23</li>
      <li>表单24</li>
      <li>表单25</li>
      <li>表单26</li>
      <li>表单27</li>
      <li>表单28</li>
      <li>表单29</li>
      <li>表单30</li>
      <li>表单31</li>
      <li>表单32</li>
      <li>表单33</li>
      <li>表单34</li>
      <li>表单35</li>
      <li>表单36</li>
      <li>表单37</li>
      <li>表单38</li>
      <li>表单39</li>
      <li>表单40</li>
      <li>表单41</li>
      <li>表单42</li>
      <li>表单43</li>
      <li>表单44</li>
      <li>表单45</li>
      <li>表单46</li>
      <li>表单47</li>
      <li>表单48</li>
      <li>表单49</li>
      <li>表单50</li>
      <li>表单51</li>
      <li>表单52</li>
      <li>表单53</li>
      <li>表单54</li>
      <li>表单55</li>
      <li>表单56</li>
      <li>表单57</li>
      <li>表单58</li>
      <li>表单59</li>
      <li>表单60</li>
      <li>表单61</li>
      <li>表单62</li>
      <li>表单63</li>
      <li>表单64</li>
      <li>表单65</li>
      <li>表单66</li>
      <li>表单67</li>
      <li>表单68</li>
      <li>表单69</li>
      <li>表单70</li>
      <li>表单71</li>
      <li>表单72</li>
      <li>表单73</li>
      <li>表单74</li>
      <li>表单75</li>
      <li>表单76</li>
      <li>表单77</li>
      <li>表单78</li>
      <li>表单79</li>
      <li>表单80</li>
      <li>表单81</li>
      <li>表单82</li>
      <li>表单83</li>
      <li>表单84</li>
      <li>表单85</li>
      <li>表单86</li>
      <li>表单87</li>
      <li>表单88</li>
      <li>表单89</li>
      <li>表单90</li>
      <li>表单91</li>
      <li>表单92</li>
      <li>表单93</li>
      <li>表单94</li>
      <li>表单95</li>
      <li>表单96</li>
      <li>表单97</li>
      <li>表单98</li>
      <li>表单99</li>
      <li>表单100</li>
    </ul>
  </div>
</template>

<script>

  import BScroll from 'better-scroll'

  export default {
    name:'',
    data () {
      return {
        scroll:null
      }
    },
    //组件创建完后调用
    //probeType 这个是一直监听 手指离开之后也监听它的滑动
    //pullUpLoad 这个是滑倒一定的高度的时候会加载更多
    mounted() {
      this.scroll = new BScroll(document.querySelector('.wrapper') ,{
        probeType: 3,
        pullUpLoad:true
      })

      this.scroll.on('scroll',(position) => {
        // console.log(position)
      })

      this.scroll.on('pullingUp', () => {
        console.log('加载更多')
      })
    }
  }
</script>

<style  scoped>
  .wrapper{
    height: 350px;
    background: pink;
    overflow: hidden;
  }
</style>
