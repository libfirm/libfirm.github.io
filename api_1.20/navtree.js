var NAVTREE =
[
  [ "libFirm", "index.html", [
    [ "Main Page", "index.html", null ],
    [ "Related Pages", "pages.html", [
      [ "Obstack Memory Allocation", "a00001.html", null ],
      [ "Visited Counters", "a00002.html", null ]
    ] ],
    [ "Modules", "modules.html", [
      [ "Code Generation", "a00111.html", [
        [ "Typedefs", "a00111.html", [
          [ "arch_irn_ops_t", "a00111.html#ga02d5fe630ebc8c7f59fe4bfe2b030c9a", null ],
          [ "create_trampoline_fkt", "a00111.html#ga6b4ef6904704ea6cedc9616af3a0263f", null ]
        ] ],
        [ "Enumerations", "a00111.html", [
          [ "asm_constraint_flags_t", "a00111.html#gaaed18208e67beaecbf6197db4f5dace6", null ]
        ] ],
        [ "Functions", "a00111.html", [
          [ "be_get_backend_param", "a00111.html#gaae97c432f10acd75f2010feac5301fc1", null ],
          [ "be_is_valid_clobber", "a00111.html#ga99bb37c6916bac35796e41a90c728c9a", null ],
          [ "be_lower_for_target", "a00111.html#ga7439369367e7b9303670d7b169e6a5cf", null ],
          [ "be_main", "a00111.html#ga3ea092eb25dd79b88ddc6c3d96817912", null ],
          [ "be_parse_arg", "a00111.html#ga8badd7917de94353b05285237153fd9d", null ],
          [ "be_parse_asm_constraints", "a00111.html#ga063f338d33714c64ae81ea4ccf6c5726", null ],
          [ "lower_for_target_pass", "a00111.html#ga7a1e943d9bab5d9ac053b80b1feace3f", null ]
        ] ],
        [ "Data Structures", "a00111.html", [
          [ "backend_params", "a00005.html", null ]
        ] ]
      ] ],
      [ "Source References", "a00114.html", [
        [ "Typedefs", "a00114.html", [
          [ "dbg_info", "a00114.html#ga23203f56dffcc8dac33622dfe6831a9d", null ],
          [ "merge_pair_func", "a00114.html#gadf2a0e903874ebd1f30398c5a184e4f3", null ],
          [ "merge_sets_func", "a00114.html#ga7d349de7203888efc7b79b535d4fff75", null ],
          [ "retrieve_dbg_func", "a00114.html#ga8ed397fb0615cebc5baf85a05ab4a5da", null ],
          [ "retrieve_type_dbg_func", "a00114.html#ga9c9d2ce610a433d333a4236120cc2d86", null ],
          [ "type_dbg_info", "a00114.html#ga63247c57676469ec94d1a74f14320014", null ]
        ] ],
        [ "Enumerations", "a00114.html", [
          [ "dbg_action", "a00114.html#ga02c7a4ba28c447eba597ee64c2cbb9a8", null ]
        ] ],
        [ "Functions", "a00114.html", [
          [ "dbg_action_2_str", "a00114.html#gaf84faccf15c642599f4cd0afb1adc27f", null ],
          [ "dbg_init", "a00114.html#ga875cf30daa7fec05b3c4e8f3b0fdd32c", null ],
          [ "ir_retrieve_dbg_info", "a00114.html#gad97928226e4f1fcd739f22e1b86bc332", null ],
          [ "ir_retrieve_type_dbg_info", "a00114.html#gacc14601f1ad6d0490a05300a1a535467", null ],
          [ "ir_set_debug_retrieve", "a00114.html#gaa897c2eab21d1fbb6e320a42dbb22915", null ],
          [ "ir_set_type_debug_retrieve", "a00114.html#ga4aa946ec431be3343a107f0036654973", null ]
        ] ]
      ] ],
      [ "Analyses", "a00116.html", [
        [ "Callgraph", "a00112.html", [
          [ "Typedefs", "a00112.html", [
            [ "callgraph_walk_func", "a00112.html#ga4cd6046d0e976598916c3b4411321851", null ]
          ] ],
          [ "Enumerations", "a00112.html", [
            [ "irp_callgraph_state", "a00112.html#ga13b5fc6be7e13d5a9b4c1d1d500ff520", null ],
            [ "loop_nesting_depth_state", "a00112.html#ga4eb55738a7155de90a67743b83f5031e", null ]
          ] ],
          [ "Functions", "a00112.html", [
            [ "analyse_loop_nesting_depth", "a00112.html#ga3221f65d7a81a11734ad678903225d18", null ],
            [ "callgraph_walk", "a00112.html#gaf767eb6c94e3252573fad8bd30035189", null ],
            [ "cgana", "a00112.html#ga12e4393ce267b33e94c73dbe9a00f9ff", null ],
            [ "compute_callgraph", "a00112.html#gad6977369d90a149e9e2b6c779a7d3d0e", null ],
            [ "find_callgraph_recursions", "a00112.html#ga8bafbdfc32e884141dc81c980472e6f8", null ],
            [ "free_callee_info", "a00112.html#ga25053e861599c6cb014d058eeac11cf5", null ],
            [ "free_callgraph", "a00112.html#ga4aa63c6933342176f626e96cb3d78bd3", null ],
            [ "free_irp_callee_info", "a00112.html#ga9cbef9a6e45816d5006a464abfdc8c1a", null ],
            [ "get_irg_callee", "a00112.html#ga9010ff099370f5cef420d9373bd63607", null ],
            [ "get_irg_callee_loop_depth", "a00112.html#gaedf82555ae9a49f721e29ed3e96773d4", null ],
            [ "get_irg_caller", "a00112.html#ga802e5abbab47479bf177e79b6f496904", null ],
            [ "get_irg_caller_loop_depth", "a00112.html#ga1d503251e6fee5d54221439010464490", null ],
            [ "get_irg_loop_depth", "a00112.html#ga7585b1435f0fec09ed7bb3467017c755", null ],
            [ "get_irg_method_execution_frequency", "a00112.html#gab0723a0ef8d3c34238279802d1038815", null ],
            [ "get_irg_n_callees", "a00112.html#gab2a261e4051d1c9ad5465f31013d3b3f", null ],
            [ "get_irg_n_callers", "a00112.html#ga602cb8c5988e90e4cef8c0d3c0b62b21", null ],
            [ "get_irg_recursion_depth", "a00112.html#gad5fb2dabd816c8bfc33e46fa07c27f85", null ],
            [ "get_irp_callgraph_state", "a00112.html#ga5968b0cacd42486f2d3603d5a92807be", null ],
            [ "get_irp_loop_nesting_depth_state", "a00112.html#ga674875d6f0dc4370b56f60100d6aa7b3", null ],
            [ "has_irg_callee_backedge", "a00112.html#ga78f07292179526db3c19c8fb90d253f2", null ],
            [ "has_irg_caller_backedge", "a00112.html#ga47ca2e06c2909e840ba454805d54a0a3", null ],
            [ "is_irg_callee_backedge", "a00112.html#gab35b340ab37d8bc5fdeb2b8d6a2a9a1d", null ],
            [ "is_irg_caller_backedge", "a00112.html#ga26768b16dba7e133d87b71f76b09bee1", null ],
            [ "opt_call_addrs", "a00112.html#gadeeeb69e28cbba16b1d8861187cb3878", null ],
            [ "set_irp_callgraph_state", "a00112.html#gaed42b73735e60ad00372b4fe3f05ccf0", null ],
            [ "set_irp_loop_nesting_depth_state", "a00112.html#gab2cb7e084de99a7bbe7a7b7e71ecac8f", null ],
            [ "set_irp_loop_nesting_depth_state_inconsistent", "a00112.html#ga75d84a165583aad03aa0166315969431", null ]
          ] ]
        ] ],
        [ "Control Dependence", "a00113.html", [
          [ "Typedefs", "a00113.html", [
            [ "ir_cdep", "a00113.html#ga6f6c8343b7976ca4ed2390d85a617f85", null ]
          ] ],
          [ "Functions", "a00113.html", [
            [ "compute_cdep", "a00113.html#ga3e27ddb8be40d3f4d58cc0903f0573e5", null ],
            [ "exchange_cdep", "a00113.html#ga5a433dbf8ba596831c6ab46a74ef6cf5", null ],
            [ "find_cdep", "a00113.html#gaf81f7d919cc7adb22986c8fa19a719ef", null ],
            [ "free_cdep", "a00113.html#ga2ae3156eeb33371d3e32690c8d33049e", null ],
            [ "get_cdep_next", "a00113.html#gab1057fdb8b98c93490be8767380cdcea", null ],
            [ "get_cdep_node", "a00113.html#gaa3157fd22ca0ae1fa272d62ed405a225", null ],
            [ "get_unique_cdep", "a00113.html#ga66db1bc6aed20378a55f266e379badbf", null ],
            [ "has_multiple_cdep", "a00113.html#gace226d155f8096fbbb0813df72ae8647", null ],
            [ "is_cdep_on", "a00113.html#ga517e3603570bfc375e82bc48fda03895", null ]
          ] ]
        ] ],
        [ "Basic Block Execution Frequency", "a00115.html", [
          [ "Typedefs", "a00115.html", [
            [ "ir_exec_freq", "a00115.html#gab49bfec934e2253657a86ef4f4f72000", null ]
          ] ],
          [ "Functions", "a00115.html", [
            [ "compute_execfreq", "a00115.html#gae6e004d2931901c409c18ff2a77e3321", null ],
            [ "create_execfreq", "a00115.html#ga7dccc0f742d4cb620451c5250516da51", null ],
            [ "free_execfreq", "a00115.html#gae12345779dd9b8ab37c66f83245c3620", null ],
            [ "get_block_execfreq", "a00115.html#ga97474ee4eebd534a0bb98f838e5e96f1", null ],
            [ "get_block_execfreq_ulong", "a00115.html#gab3975e897ed4a96e3cfb592208f032ab", null ],
            [ "set_execfreq", "a00115.html#ga06a1832be3610e4232c6cc018f87cd36", null ]
          ] ]
        ] ],
        [ "Node Heights", "a00119.html", [
          [ "Typedefs", "a00119.html", [
            [ "ir_heights_t", "a00119.html#ga7dd0058e62e0fec21df037e71f759ea1", null ]
          ] ],
          [ "Functions", "a00119.html", [
            [ "get_irn_height", "a00119.html#ga5d543daca7c0aaeeebd81bb0d583cad9", null ],
            [ "heights_free", "a00119.html#ga600548901dcdf851d7496bfb633069e7", null ],
            [ "heights_new", "a00119.html#ga411468a1bd3cec73c8fbba002acbfc2a", null ],
            [ "heights_reachable_in_block", "a00119.html#ga459ad08251eed37f0ee8e38d2938de2b", null ],
            [ "heights_recompute_block", "a00119.html#ga3545080a0ab76f119b3ab45855eb85a2", null ]
          ] ]
        ] ],
        [ "Dominance Information", "a00122.html", [
          [ "Defines", "a00122.html", [
            [ "dominates_for_each", "a00122.html#ga16d613edfff9f0ae1758442b475f0fa6", null ],
            [ "postdominates_for_each", "a00122.html#ga98dea277f3e40035530695aa0d4ec37d", null ]
          ] ],
          [ "Functions", "a00122.html", [
            [ "assure_doms", "a00122.html#ga077bcf7fe20c8fbf788114f754eb7a15", null ],
            [ "assure_postdoms", "a00122.html#gaf657460975dd582bc3a22634edd727f5", null ],
            [ "block_dominates", "a00122.html#ga3fdc60cb97ca6dea1ec7806d1cc83070", null ],
            [ "block_postdominates", "a00122.html#gaf0a20a6973cf1ce7cf8ca252a0f42ced", null ],
            [ "block_strictly_dominates", "a00122.html#ga23421d34ee1fd4ffe3a090c6101864ef", null ],
            [ "block_strictly_postdominates", "a00122.html#ga0f4416591d40e349ec9ea5c37d571194", null ],
            [ "compute_doms", "a00122.html#ga3c9d78ed0d1a31a7332a90e86dc4e655", null ],
            [ "compute_postdoms", "a00122.html#gadb35a161077be21e17ba56ef46ca4125", null ],
            [ "dom_tree_walk", "a00122.html#ga05cbbb564a29c31a258bd2375ba18222", null ],
            [ "dom_tree_walk_irg", "a00122.html#ga31013e40262f3dfb15abefa0ab6fafa7", null ],
            [ "free_dom", "a00122.html#ga3088bcb00c66bdc28d4628d5314c9895", null ],
            [ "free_postdom", "a00122.html#gaadd7630ee2868fd292c460a9fcdaee35", null ],
            [ "get_Block_dominated_first", "a00122.html#ga619063127cc663908b5c259797ee9d03", null ],
            [ "get_Block_dominated_next", "a00122.html#gac44b0ce4fc1fc8e890ba88990b59ccbc", null ],
            [ "get_Block_idom", "a00122.html#gadf60f35ef1e6c8e489c1433e7ce77a82", null ],
            [ "get_Block_ipostdom", "a00122.html#ga6a27c4a07505fd86a0d25a689cd6703d", null ],
            [ "get_Block_postdominated_first", "a00122.html#ga45c1f5812a8acba0e20509a1c99bdbe2", null ],
            [ "get_Block_postdominated_next", "a00122.html#ga6211ab7668a211d7de6c898cf5265184", null ],
            [ "node_smallest_common_dominator", "a00122.html#ga0858907528a5be50ddbc044919da365f", null ],
            [ "postdom_tree_walk", "a00122.html#gad7fc80739bf62dfbe4e851e95962e695", null ],
            [ "postdom_tree_walk_irg", "a00122.html#gac3f5faa5fdcba075ce5538f2f0747725", null ]
          ] ]
        ] ],
        [ "Dynamic Reverse Edges", "a00125.html", [
          [ "Defines", "a00125.html", [
            [ "edges_activated", "a00125.html#gabf445047136c0b6082cef5aea95d4552", null ],
            [ "edges_reroute", "a00125.html#gae5f37e97b40c2392abff7e9d36d0ade5", null ],
            [ "foreach_block_succ", "a00125.html#ga6f28bc7148aca85166164b569c52f186", null ],
            [ "foreach_out_edge", "a00125.html#gafc02c59eeff3bde6786e861dc80c82b6", null ],
            [ "foreach_out_edge_kind", "a00125.html#ga0e6f5476053539b2d844dbb7d7ffaa8f", null ],
            [ "foreach_out_edge_kind_safe", "a00125.html#ga31a0f59e693b3d4bbe2ed1384db1e9f4", null ],
            [ "foreach_out_edge_safe", "a00125.html#gadb8578f4e7049c00d09d73f20949b7e4", null ],
            [ "get_block_succ_first", "a00125.html#gae12354bf7f1a41e31d00a02913e6be44", null ],
            [ "get_block_succ_next", "a00125.html#ga40ed8b503f18fb0d641a05463084bba9", null ],
            [ "get_irn_n_edges", "a00125.html#ga58c2144a31bf4405092ec7bfa12d67f7", null ],
            [ "get_irn_out_edge_first", "a00125.html#gaf93cc612c491c96ed7fe7ea2f34f6d1c", null ]
          ] ],
          [ "Typedefs", "a00125.html", [
            [ "ir_edge_t", "a00125.html#ga317e081610268b83cfd387483efb6cde", null ]
          ] ],
          [ "Enumerations", "a00125.html", [
            [ "ir_edge_kind_t", "a00125.html#gaa7b7ec2d934512dc90362c51f10dd22d", null ]
          ] ],
          [ "Functions", "a00125.html", [
            [ "edges_activate", "a00125.html#gafa5f9e79968f831f52bdf54489e85a6d", null ],
            [ "edges_activate_kind", "a00125.html#gad11ce4732343e4f5f82ac2dd4cc46ad5", null ],
            [ "edges_activated_kind", "a00125.html#ga0acea7972128bb2ed0bc325f4d0a6f41", null ],
            [ "edges_assure", "a00125.html#gad790426a90c60b54e3b9b82037593fd6", null ],
            [ "edges_assure_kind", "a00125.html#gaf88d98946f92b47b42608288cee8f361", null ],
            [ "edges_deactivate", "a00125.html#ga713bde63c8948be258f17b31061f2f2a", null ],
            [ "edges_deactivate_kind", "a00125.html#ga15805b1cfb96a5ca5eacfeedd12ce21f", null ],
            [ "edges_init_dbg", "a00125.html#gace9d864428fd22e9f16c7fb26ccfdc50", null ],
            [ "edges_reroute_kind", "a00125.html#gaf422d18d13c225bafd2a2008da444218", null ],
            [ "edges_reset_private_data", "a00125.html#ga93ca2adee5af36726f9b6d3037ec33d0", null ],
            [ "edges_verify", "a00125.html#ga89b7c2b8112a4d42c702182c5d3f0f23", null ],
            [ "edges_verify_kind", "a00125.html#gaf6069708b84529a77f5b7ffe89110247", null ],
            [ "get_edge_src_irn", "a00125.html#gaacb630de88dbf355089760e88092c098", null ],
            [ "get_edge_src_pos", "a00125.html#ga1067cb165245114f3a5137418fb04789", null ],
            [ "get_irn_edge_kind", "a00125.html#ga1a9bdbcf7b7516fa1f34bd0b5ace7dfc", null ],
            [ "get_irn_n_edges_kind", "a00125.html#gaf3ec56bf04c4a472ef14f59f60236dc3", null ],
            [ "get_irn_out_edge_first_kind", "a00125.html#ga384e418f936b9c5e98c73d27ccab9c07", null ],
            [ "get_irn_out_edge_next", "a00125.html#ga32ffaa2e8510348d37b0127e582f52c7", null ],
            [ "irg_block_edges_walk", "a00125.html#ga5284f721db2993bd6f8ff822d2c5731f", null ],
            [ "irg_verify_edges_pass", "a00125.html#ga73a8f80ea20c8a413ee1065b8deab9bf", null ],
            [ "irg_walk_edges", "a00125.html#gaad9d6e44b1a814a70235961b4c832762", null ]
          ] ]
        ] ],
        [ "Loops", "a00132.html", [
          [ "Typedefs", "a00132.html", [
            [ "ir_loop", "a00132.html#gaabe5e5bdcb0abada6ce161b1d9513c16", null ]
          ] ],
          [ "Functions", "a00132.html", [
            [ "assure_loopinfo", "a00132.html#ga844d45f5199cbad2b58b1f4413d59def", null ],
            [ "clear_backedges", "a00132.html#ga6aabf02052122b80a71080d5c726d296", null ],
            [ "construct_backedges", "a00132.html#gac796345e03aed7dbf63c17f3eb9114d2", null ],
            [ "construct_cf_backedges", "a00132.html#ga0ecf72308a0db3a026605360690c2a58", null ],
            [ "free_all_loop_information", "a00132.html#gad7ff213c683c2374f510d085a0e825f7", null ],
            [ "free_loop_information", "a00132.html#gae347e30958dac5b45c5e8c4119af63ad", null ],
            [ "get_irg_loop", "a00132.html#gaa5b5c186465161ab526d49f6d31feb59", null ],
            [ "get_irn_loop", "a00132.html#gaea198151be6f2719d68731f9a4973535", null ],
            [ "get_loop_depth", "a00132.html#gab0fb290cac9a4f684fb98c76d1dd06c7", null ],
            [ "get_loop_element", "a00132.html#ga6719829011d112dc9c6c195f574cfc2a", null ],
            [ "get_loop_link", "a00132.html#gaa203c8c8f17ae728196d0f227739dace", null ],
            [ "get_loop_loop_nr", "a00132.html#ga19574c916ab44b3fb98ac9e458178732", null ],
            [ "get_loop_n_elements", "a00132.html#gaa7a6f9131a4084bc9971a608c27f8afe", null ],
            [ "get_loop_outer_loop", "a00132.html#gaa0f1318dc8784c625a732ae17725b935", null ],
            [ "has_backedges", "a00132.html#gace0e43d74c7ae4889aedf78b98d3a47f", null ],
            [ "is_backedge", "a00132.html#gaa1e6b7357ef97d3fef5cf4014be7a9af", null ],
            [ "is_ir_loop", "a00132.html#gad01496700d75bffed61152438740ff21", null ],
            [ "is_loop_invariant", "a00132.html#ga7867bc3e6b201f6fdd98b2fc3186f9f9", null ],
            [ "set_backedge", "a00132.html#ga715a1e51c5448c8123edefdb5f7b9946", null ],
            [ "set_irg_loop", "a00132.html#ga0907219ed5c68f0ffae4e30fe5881cc0", null ],
            [ "set_loop_link", "a00132.html#gaa762090f81abe0411b014428b2ed1f5a", null ],
            [ "set_not_backedge", "a00132.html#ga13617a6b945267134428c465db103908", null ]
          ] ],
          [ "Data Structures", "a00132.html", [
            [ "loop_element", "a00013.html", null ]
          ] ]
        ] ],
        [ "Memory Disambiguator", "a00133.html", [
          [ "Typedefs", "a00133.html", [
            [ "DISAMBIGUATOR_FUNC", "a00133.html#gab47958ec294af90cfd967890f33d2de6", null ]
          ] ],
          [ "Enumerations", "a00133.html", [
            [ "ir_alias_relation", "a00133.html#gaaa3c757388bbc2a2a9acec6111a5729d", null ],
            [ "ir_disambuigator_options", "a00133.html#ga04cb3648113ded5edc89e9be6dd217cb", null ],
            [ "ir_entity_usage_computed_state", "a00133.html#gaf9c9f44194dc952d2eb39bee41eb687e", null ],
            [ "ir_storage_class_class_t", "a00133.html#ga2d4b10b8c567024dd517ce7084565fc1", null ]
          ] ],
          [ "Functions", "a00133.html", [
            [ "assure_irg_entity_usage_computed", "a00133.html#ga9b4ed09733e4bf4e41272541dc002cfe", null ],
            [ "assure_irp_globals_entity_usage_computed", "a00133.html#ga4f31e87163e0e59332484d049c931406", null ],
            [ "classify_pointer", "a00133.html#gace7e6bd7f73c4fc1262050a318e43876", null ],
            [ "get_alias_relation", "a00133.html#gad6a11e9a33c70da6b24a4a993f3ca640", null ],
            [ "get_alias_relation_ex", "a00133.html#ga020b2a6364e842e72d0c238c0d15b77a", null ],
            [ "get_base_sc", "a00133.html#ga97baf5162933fe911d52a0a108db059a", null ],
            [ "get_ir_alias_relation_name", "a00133.html#ga0d0d9e24d0d1d1787504f09927f4dffd", null ],
            [ "get_irg_memory_disambiguator_options", "a00133.html#ga6c8032129bb7830abc31765a5c523d58", null ],
            [ "get_irp_globals_entity_usage_state", "a00133.html#ga40cea2099fbf2699eb36089d62c438a9", null ],
            [ "mark_private_methods", "a00133.html#ga74a80173669dcb101e3b3e15226ea9eb", null ],
            [ "mark_private_methods_pass", "a00133.html#gac32f409e39cd8a7085f4ab0647b72feb", null ],
            [ "mem_disambig_init", "a00133.html#gad892c8b9d7f52601f4022a9c39039b3a", null ],
            [ "mem_disambig_term", "a00133.html#gaba6e6a39a0370c26e3a61a5ad1beb8d8", null ],
            [ "set_irg_memory_disambiguator_options", "a00133.html#gae4649133600f528bfe1e4ba14eb750a3", null ],
            [ "set_irp_globals_entity_usage_state", "a00133.html#ga2f3979da95071cdb92abf48c2db752af", null ],
            [ "set_irp_memory_disambiguator_options", "a00133.html#ga4bd9266573104feb752b94c4374f933f", null ],
            [ "set_language_memory_disambiguator", "a00133.html#gac33e90dde093978f9178ed19b2faa1ea", null ]
          ] ]
        ] ],
        [ "Reverse Edges", "a00139.html", [
          [ "Functions", "a00139.html", [
            [ "assure_irg_outs", "a00139.html#ga99a65eee68da719bdfc9c8b3ce070111", null ],
            [ "compute_irg_outs", "a00139.html#gab8c8340c85c6ccd05ae6cc1300f7c910", null ],
            [ "compute_irp_outs", "a00139.html#gac5c9a7164444e11d2b3ebc5303c78dc2", null ],
            [ "free_irg_outs", "a00139.html#ga653bbcf0028c1484441dcd632ebcbc81", null ],
            [ "free_irp_outs", "a00139.html#ga275272f65d9b1884a8e5d72abf64cf01", null ],
            [ "get_Block_cfg_out", "a00139.html#ga0d18c2e7e6bba34fb6e759329acc9044", null ],
            [ "get_Block_cfg_out_ka", "a00139.html#gac7fd43048c28f4888f33b99244fc4f3b", null ],
            [ "get_Block_n_cfg_outs", "a00139.html#ga687d3eff040bc12bd7fefd28cd322214", null ],
            [ "get_Block_n_cfg_outs_ka", "a00139.html#ga8dbbf36df21af1bc10d010936a0a9c9b", null ],
            [ "get_irn_n_outs", "a00139.html#ga716d8e82af4ea1f9e53f9c6b1b1555fe", null ],
            [ "get_irn_out", "a00139.html#ga685d8ca3bf7d6ad7c14e79a69bca1af2", null ],
            [ "get_irn_out_ex", "a00139.html#ga3ec240a0cfab109dd33267082da1b64b", null ],
            [ "get_irn_outs_computed", "a00139.html#ga64715aa3ed6e9ab9fd8b52074be6ed4b", null ],
            [ "irg_out_block_walk", "a00139.html#ga47456ae3a7dfa4f3382530fa08c08b45", null ],
            [ "irg_out_walk", "a00139.html#ga73c4ee861734ae34d3ae2215b05cd6c2", null ],
            [ "set_irn_out", "a00139.html#ga99d4eb6701cde407f0e2a6b88e11cd48", null ]
          ] ]
        ] ],
        [ "Value Information", "a00218.html", [
          [ "Enumerations", "a00218.html", [
            [ "range_types", "a00218.html#gabb5212d41eb6a4a8f6fa84e69902de53", null ]
          ] ],
          [ "Functions", "a00218.html", [
            [ "free_vrp_data", "a00218.html#ga3e612453e4485d3fccf69e89384c0383", null ],
            [ "set_vrp_data", "a00218.html#gaba3d3c3a783b50e276cb4c481157afbb", null ],
            [ "vrp_cmp", "a00218.html#ga6fc3305e47dfd55fbbc6dd27dfcd8222", null ],
            [ "vrp_get_info", "a00218.html#ga1d835f02c6c0d5d3735573ea744a7e49", null ]
          ] ],
          [ "Data Structures", "a00218.html", [
            [ "vrp_attr", "a00023.html", null ]
          ] ]
        ] ]
      ] ],
      [ "Abstract Data Structures", "a00117.html", [
        [ "Arrays", "a00097.html", [
          [ "Defines", "a00097.html", [
            [ "ARR_APP1", "a00097.html#gac12fcfe1b957a41f719ff416d4b604dd", null ],
            [ "ARR_EXTEND", "a00097.html#gac5b3319a960b1d1bd6871ce1d0f20354", null ],
            [ "ARR_EXTO", "a00097.html#gaf67b45e8d1fc7e36a101f8242c443678", null ],
            [ "ARR_IDX_VRFY", "a00097.html#ga602e0c33742da9e5ef8aab7987773ec9", null ],
            [ "ARR_LEN", "a00097.html#gae80f396a17127ce32095c01e4550ea60", null ],
            [ "ARR_RESIZE", "a00097.html#ga547290a5219a2ba1d9a9c7f2897a8f6d", null ],
            [ "ARR_SETLEN", "a00097.html#ga8077a3076177a2cd02c51ee44029e8c2", null ],
            [ "ARR_VRFY", "a00097.html#ga6b63f2612c2b0e10c419255098beccf6", null ],
            [ "CLONE_ARR_D", "a00097.html#ga8bc1df4f39a92123059179436da3a9b8", null ],
            [ "CLONE_ARR_F", "a00097.html#ga99451bcc854af8df53a1ee00c75b6d99", null ],
            [ "DEL_ARR_F", "a00097.html#ga8769f66fed183e8b3df6479ea863a9da", null ],
            [ "DUP_ARR_D", "a00097.html#gabd3fbf60579bcd7c5f14124fd1ab791c", null ],
            [ "DUP_ARR_F", "a00097.html#gabb732aeae08b6e08a1ef335d3d27f9c1", null ],
            [ "NEW_ARR_D", "a00097.html#ga8431971ed4ddabc405d84101d8a5fc5f", null ],
            [ "NEW_ARR_F", "a00097.html#ga8eac9f8b9fbe9fe6786d14c078b7c0b0", null ]
          ] ]
        ] ],
        [ "Set (custom Compare)", "a00099.html", [
          [ "Typedefs", "a00099.html", [
            [ "cpset_cmp_function", "a00099.html#gaaf6465891ae1f1b194b7c223a6276e77", null ],
            [ "cpset_hash_function", "a00099.html#gac16020d648de02b8d0b85b661a67cb5e", null ],
            [ "cpset_iterator_t", "a00099.html#ga66afe1fa7da14a707279d4af9b6022f9", null ],
            [ "cpset_t", "a00099.html#ga7852426e8ad214de06d6a6c94df68d09", null ]
          ] ],
          [ "Functions", "a00099.html", [
            [ "cpset_destroy", "a00099.html#ga889418f5ad898004e1e1319586136359", null ],
            [ "cpset_find", "a00099.html#ga9975e363adeaac01449c603a67d7e2b9", null ],
            [ "cpset_init", "a00099.html#ga694f23c67d584b1d5cd04520469aa1c4", null ],
            [ "cpset_init_size", "a00099.html#gade5bbbd30cd0cf0aebff7d964adb8182", null ],
            [ "cpset_insert", "a00099.html#ga69e810afa040763f63467107eec29592", null ],
            [ "cpset_iterator_init", "a00099.html#gae8f5adcf4b531711938e14f1f90393e2", null ],
            [ "cpset_iterator_next", "a00099.html#gae0ec071c27b6f9ced4f33a8d9fd0a4f8", null ],
            [ "cpset_remove", "a00099.html#gadce7f8796ef5d40712bb5986b06e921f", null ],
            [ "cpset_remove_iterator", "a00099.html#ga9f467fcbfc4eebbf3b9dd23c90399e5b", null ],
            [ "cpset_size", "a00099.html#ga21b06692a3974c8681eae960c636dcac", null ]
          ] ]
        ] ],
        [ "Linked Lists", "a00103.html", [
          [ "Defines", "a00103.html", [
            [ "__list_for_each", "a00103.html#gabfd5aa736021dace98d07ff2518a698d", null ],
            [ "INIT_LIST_HEAD", "a00103.html#ga0ffe9d28c36d7b018a9cfae33bae45c0", null ],
            [ "list_entry", "a00103.html#ga26c976b7f654e70df318c1843e5094de", null ],
            [ "list_for_each", "a00103.html#gab8b24e6660ab3760c923e4b4db3fa502", null ],
            [ "list_for_each_entry", "a00103.html#ga69873b32fd7075d57089065207bfe0ac", null ],
            [ "list_for_each_entry_reverse", "a00103.html#gacc1924a47c3aef655aaab735a5d82d11", null ],
            [ "list_for_each_entry_safe", "a00103.html#ga9c74a31c63931c7762a7998c851f49ed", null ],
            [ "list_for_each_prev", "a00103.html#ga19fc06b83f3502a83ce566b8887e6aec", null ],
            [ "list_for_each_safe", "a00103.html#ga9e4b9328744994b9d3878f5dad75c09f", null ],
            [ "LIST_HEAD", "a00103.html#ga42f0e72af970a790b60a740af8c9ecd0", null ],
            [ "LIST_HEAD_INIT", "a00103.html#ga4642d4b7df28478bb762fe43c85b5c63", null ]
          ] ],
          [ "Typedefs", "a00103.html", [
            [ "list_head", "a00103.html#ga371b3bb4739830f6d86be3945a2fbb0e", null ]
          ] ],
          [ "Functions", "a00103.html", [
            [ "__list_add", "a00103.html#gaf98058e9b729b71fa84b8335bf18839a", null ],
            [ "__list_del", "a00103.html#ga24b474717d65a296695e8b79b4adefda", null ],
            [ "__list_splice", "a00103.html#ga25979c80a2d71dd02ada121a46c71a59", null ],
            [ "list_add", "a00103.html#gaa0baf5e56377857414770fe62cb6fbfc", null ],
            [ "list_add_tail", "a00103.html#ga9ad23b79a365fe07c9aafd7ccf1acf0d", null ],
            [ "list_del", "a00103.html#gab1708206f0f7e0a56550b35372203ba5", null ],
            [ "list_del_init", "a00103.html#gae1cde0f50b85945cfff23be4fc1586f4", null ],
            [ "list_empty", "a00103.html#ga6601e54d8f27ab290ee6819f7e2127b7", null ],
            [ "list_move", "a00103.html#gaee8df43e41969c2272acfd6ed6e75d4c", null ],
            [ "list_move_tail", "a00103.html#ga1c5ac6a6b04a03f5782e818daacf96e9", null ],
            [ "list_splice", "a00103.html#ga2c4399cfbde5e5d5eddf2e13c97bd5d5", null ],
            [ "list_splice_init", "a00103.html#ga948b15519bb72e3d42f3e56975580d30", null ]
          ] ]
        ] ],
        [ "Double Ended Queue", "a00104.html", [
          [ "Defines", "a00104.html", [
            [ "del_waitq", "a00104.html#ga96546fdf4e427393d9c969b879256aeb", null ],
            [ "new_stack", "a00104.html#ga1e6700c403eb306fae9c07e7774203ba", null ],
            [ "new_waitq", "a00104.html#ga45bb00b6efbb0d4a29daacdc7f1f422c", null ],
            [ "stack_empty", "a00104.html#ga1e129a0f69b1545af835f8625291c50f", null ],
            [ "stack_pop", "a00104.html#gaa15a953f2a7858a9fd26eff9d088a2a0", null ],
            [ "stack_push", "a00104.html#gadc36307968f218b4c6da65e1df99ed4d", null ],
            [ "waitq_empty", "a00104.html#ga7d9ab5d864ed35bdbff4eb9744464e16", null ],
            [ "waitq_get", "a00104.html#gaa3b46328c84646996152bb4531dff25d", null ],
            [ "waitq_put", "a00104.html#ga3c1f4f19dd7ef443733a3449dc2fb02b", null ]
          ] ],
          [ "Typedefs", "a00104.html", [
            [ "cmp_fun", "a00104.html#ga73617dcc6bca43d7079f5f951881d160", null ],
            [ "pdeq", "a00104.html#gac82d6a93cb320a0d5a9567a4fe1712f5", null ],
            [ "stack", "a00104.html#ga252059f4ca25f59392d4dd152eda4f5d", null ],
            [ "waitq", "a00104.html#ga1773198223a20abc40a9d09b4902d275", null ]
          ] ],
          [ "Functions", "a00104.html", [
            [ "del_pdeq", "a00104.html#ga267d45226e25248756941485be763190", null ],
            [ "new_pdeq", "a00104.html#ga999ddeaaa95010cd72023a91907cc795", null ],
            [ "new_pdeq1", "a00104.html#ga10d88338e32aaba59f604697251c9b93", null ],
            [ "pdeq_contains", "a00104.html#ga8192004ae958ce0e3c9a723ebe131a5f", null ],
            [ "pdeq_copyl", "a00104.html#ga61673740c805279b06a6b622a681962e", null ],
            [ "pdeq_copyr", "a00104.html#gaf1c496e0f6eeead7f68924894bdee36f", null ],
            [ "pdeq_empty", "a00104.html#ga6399088c6ade532320d18e81e300cfa6", null ],
            [ "pdeq_getl", "a00104.html#gae81fb2e47547cacf40e0f486a473f75c", null ],
            [ "pdeq_getr", "a00104.html#gadc6b59204759a62017ff783e6c417846", null ],
            [ "pdeq_len", "a00104.html#gacbd34f7242be9483f1c61c041971ba2b", null ],
            [ "pdeq_putl", "a00104.html#ga5379f0303e059b0def7f52fbb1c287ea", null ],
            [ "pdeq_putr", "a00104.html#gade288925082e366ab2b5455eab2f0e75", null ],
            [ "pdeq_search", "a00104.html#ga7e44a1f0dad5cbeb03358af616724584", null ]
          ] ]
        ] ],
        [ "Pointer Map", "a00105.html", [
          [ "Defines", "a00105.html", [
            [ "foreach_pmap", "a00105.html#gabc8f55eab8be67daec6da355cb464aaf", null ]
          ] ],
          [ "Typedefs", "a00105.html", [
            [ "pmap", "a00105.html#gab61601c9e46c71ed2ad5c5084cd06f0d", null ]
          ] ],
          [ "Functions", "a00105.html", [
            [ "pmap_break", "a00105.html#ga10e4e58e8a031709486af6774bef906e", null ],
            [ "pmap_contains", "a00105.html#gad2b09d4bd1fa33bf119f91765c9e9345", null ],
            [ "pmap_count", "a00105.html#ga0115260672f02a7d32c78bc9ebcc66b7", null ],
            [ "pmap_create", "a00105.html#gaf8ecea1691cf1b2e78071f505d0149b0", null ],
            [ "pmap_create_ex", "a00105.html#ga6f8f569e2f870c21c7620a2f0e1ebbb9", null ],
            [ "pmap_destroy", "a00105.html#ga1ff66f9ef550b1ad8709ef8ec8d28073", null ],
            [ "pmap_find", "a00105.html#ga55beee7e3262a4bd849518fd35965f08", null ],
            [ "pmap_first", "a00105.html#gaeec61e5ca10e6c565d36a5c0244651df", null ],
            [ "pmap_get", "a00105.html#ga58e526d921b152f54e36d0f59873a4a7", null ],
            [ "pmap_insert", "a00105.html#gaba5f50f4dc213ebc48fb1f0e0fe38b63", null ],
            [ "pmap_next", "a00105.html#ga9cd5b16c751ee3d6d63c75e94d4bf3ff", null ]
          ] ],
          [ "Data Structures", "a00105.html", [
            [ "pmap_entry", "a00016.html", null ]
          ] ]
        ] ],
        [ "Priority Queue", "a00106.html", [
          [ "Typedefs", "a00106.html", [
            [ "pqueue_t", "a00106.html#ga05e211b59fd9be5939218e11d1132167", null ]
          ] ],
          [ "Functions", "a00106.html", [
            [ "del_pqueue", "a00106.html#ga2fbcff924db1c33b6b1eabae4598c9bb", null ],
            [ "new_pqueue", "a00106.html#ga4a54c29174ae3ea2bb4706dc3854ee0d", null ],
            [ "pqueue_empty", "a00106.html#gae1e8de02954c0c8b58b466483f37de85", null ],
            [ "pqueue_length", "a00106.html#ga83c8eb3b532b96cbe6978007f59c4174", null ],
            [ "pqueue_pop_front", "a00106.html#ga4ad2ddad99232be8a5ad4892691d8de5", null ],
            [ "pqueue_put", "a00106.html#ga5efbae02e5539c6e4f426a915435617f", null ]
          ] ]
        ] ],
        [ "Pointer Set", "a00107.html", [
          [ "Defines", "a00107.html", [
            [ "foreach_pset", "a00107.html#ga031ff1eaf1a7ff78282d5770eff5bbc5", null ],
            [ "pset_find_ptr", "a00107.html#ga1ceb18ebbe8467e064c050e34499596c", null ],
            [ "pset_hinsert_ptr", "a00107.html#ga2575a38b616361d3eb611fc5f71241c9", null ],
            [ "pset_insert_ptr", "a00107.html#ga8df16f7ac83c8ce50886d752cfa9098f", null ],
            [ "pset_new_ptr", "a00107.html#gaeb3fb3bdbba687ded52094d2711b1da7", null ],
            [ "pset_new_ptr_default", "a00107.html#gaa64e5908ee0438d0457941c2a71584d1", null ],
            [ "pset_remove_ptr", "a00107.html#gab8b9d8c80e62d46c2a89bf203bdeb93b", null ]
          ] ],
          [ "Typedefs", "a00107.html", [
            [ "pset", "a00107.html#ga8af689e83ec2d3705141b68f65d2256f", null ],
            [ "pset_cmp_fun", "a00107.html#ga9d78dac1f318d28ca595bfb14eb145c7", null ]
          ] ],
          [ "Functions", "a00107.html", [
            [ "del_pset", "a00107.html#gaa11ef815523bf5adcc4b7acb0c333317", null ],
            [ "new_pset", "a00107.html#gaeeb51f206631567e64c6bf97ee39fc5f", null ],
            [ "pset_break", "a00107.html#gadd09ae4a91a4133c8c5ab98dc4313f6f", null ],
            [ "pset_count", "a00107.html#ga49dd0db176922539e37c0e22ec66561e", null ],
            [ "pset_default_ptr_cmp", "a00107.html#ga6a94b459f67ecae37beaf03f00b24e85", null ],
            [ "pset_find", "a00107.html#ga32519618285cc767b6a1ea3a5396ab96", null ],
            [ "pset_first", "a00107.html#ga25a8573fbeb6d661167d157decfd66cd", null ],
            [ "pset_hinsert", "a00107.html#gabd4fe7232fe4186c24f9efa7dfc2b13d", null ],
            [ "pset_insert", "a00107.html#ga1a0134e02324ed91b5e4934d943f0492", null ],
            [ "pset_insert_pset_ptr", "a00107.html#ga526fca54e1c46ac1ea91ed76d06bc9f4", null ],
            [ "pset_next", "a00107.html#ga8c97226be05a1e76bbb8a1d04c42ec19", null ],
            [ "pset_remove", "a00107.html#ga36d411cdde8d38ccd442eb81f6421a8b", null ]
          ] ],
          [ "Data Structures", "a00107.html", [
            [ "pset_entry", "a00017.html", null ]
          ] ]
        ] ],
        [ "Generic Hashset", "a00108.html", [
          [ "Defines", "a00108.html", [
            [ "foreach_set", "a00108.html#ga8a6f8406fd34f7d7e6118a597774b165", null ]
          ] ],
          [ "Typedefs", "a00108.html", [
            [ "set", "a00108.html#gabd4f90147e28daacb9e7651fed26a077", null ],
            [ "set_cmp_fun", "a00108.html#ga45602ace24d2a0574a93a50e4aed3dee", null ]
          ] ],
          [ "Functions", "a00108.html", [
            [ "del_set", "a00108.html#ga1d66d0e714f57f6cbdced0ca422a6887", null ],
            [ "new_set", "a00108.html#ga8a3d2bdb47b1ec92d9340786c2e75c21", null ],
            [ "set_break", "a00108.html#gab2d739f0dbeab75306badb2af78383df", null ],
            [ "set_count", "a00108.html#ga74ea5ab1849fd896d918571bf2af1e46", null ],
            [ "set_find", "a00108.html#gae5706ab5ba1fc6cacdc8f1e5086993c6", null ],
            [ "set_first", "a00108.html#ga67bb917310bd6e0486df43b34ccdaec1", null ],
            [ "set_hinsert", "a00108.html#ga348eee9b05d846cf042e8078cb0096b0", null ],
            [ "set_hinsert0", "a00108.html#ga2e9c2181226a08ff0a852d5302b9014a", null ],
            [ "set_insert", "a00108.html#gafe7efa41c9851f59baa507598da6e8c9", null ],
            [ "set_next", "a00108.html#ga96f2df1f9967816447e1ab8e1a4eaaf2", null ]
          ] ],
          [ "Data Structures", "a00108.html", [
            [ "set_entry", "a00019.html", null ]
          ] ]
        ] ],
        [ "Union-Find", "a00109.html", [
          [ "Functions", "a00109.html", [
            [ "uf_find", "a00109.html#ga6ef1a12475493f2cce94e2672a33806b", null ],
            [ "uf_init", "a00109.html#ga9d779ef74a7b1c5b8633af8deef7de74", null ],
            [ "uf_union", "a00109.html#ga0ff7d0e92ecb204d4430e3b2ba6aef7b", null ]
          ] ]
        ] ],
        [ "Memory Allocation", "a00110.html", [
          [ "Defines", "a00110.html", [
            [ "ALLOCAN", "a00110.html#ga1539eca823f06e0937cca24cdc0140bc", null ],
            [ "ALLOCANZ", "a00110.html#gaffb16de590ce3520d7962b00746d808b", null ],
            [ "OALLOC", "a00110.html#ga3ae5d1ed24a1d169224610b55221f09d", null ],
            [ "OALLOCF", "a00110.html#ga52fa6c4efe3ca93c3fd4a748f7998c61", null ],
            [ "OALLOCFZ", "a00110.html#gac9671673f52ed2809cb92365583c68eb", null ],
            [ "OALLOCN", "a00110.html#ga6d4033550cd0d4b08cc297da35fb14bc", null ],
            [ "OALLOCNZ", "a00110.html#ga41a54f0043cba310452ff3df7dfe8ba9", null ],
            [ "OALLOCZ", "a00110.html#gae093358177334ce943ce8c74ac268244", null ],
            [ "xfree", "a00110.html#ga4a89b05c8aef040543760ab4fba07fb0", null ],
            [ "XMALLOC", "a00110.html#ga4e8a21f1b2fc046e3791460217dc02ea", null ],
            [ "XMALLOCF", "a00110.html#gafee72231d0bbb5e8dfc0b0f700f6df7f", null ],
            [ "XMALLOCFZ", "a00110.html#ga288dfb516d89b6eb8fe949033117c37b", null ],
            [ "XMALLOCN", "a00110.html#ga58c49c3b37be8caf0fc100fbd477d1ea", null ],
            [ "XMALLOCNZ", "a00110.html#gacb44f2195e3f651625770e00e1b6ebde", null ],
            [ "XMALLOCZ", "a00110.html#gaf5b20871aff30bca23cbce88a33767db", null ],
            [ "XREALLOC", "a00110.html#ga5e0ac28f50ec30d1ab9042fecb802c76", null ]
          ] ],
          [ "Functions", "a00110.html", [
            [ "xmalloc", "a00110.html#ga42ccfa6fc49cc4ce90cc44cd05052490", null ],
            [ "xrealloc", "a00110.html#ga93a8ec6e8a6eef0f62b7e5b50d0bf9e4", null ],
            [ "xstrdup", "a00110.html#gad6142d091f00b2d4543ce7a43e5d0eba", null ]
          ] ]
        ] ]
      ] ],
      [ "Algorithms", "a00118.html", [
        [ "Bipartite Matching", "a00098.html", [
          [ "Typedefs", "a00098.html", [
            [ "bipartite_t", "a00098.html#gadd74aac3a9aff8a182fbbd8aaa34a298", null ]
          ] ],
          [ "Functions", "a00098.html", [
            [ "bipartite_add", "a00098.html#ga3b44c4efba94bba3af001a7f3dff5064", null ],
            [ "bipartite_adj", "a00098.html#ga081b11a22491dedbd6190910ff9ac7e9", null ],
            [ "bipartite_dump", "a00098.html#gaf5938fd11776d23fedb7cd64153fb4de", null ],
            [ "bipartite_dump_f", "a00098.html#gab83c7f46e459dcb48eedbf3fdd316ed9", null ],
            [ "bipartite_free", "a00098.html#ga7f1ee8c2ff52fb843e3ef233bba8c65c", null ],
            [ "bipartite_matching", "a00098.html#gab97e185eb44b7a4a3c286d90f77f9a6d", null ],
            [ "bipartite_new", "a00098.html#ga0e674a36bf424d0d8cc1a0f58eb6a22f", null ],
            [ "bipartite_remv", "a00098.html#ga7c7966f191fe384a8f92c40b094ffc20", null ]
          ] ]
        ] ],
        [ "Gauss Jordan Elimination", "a00100.html", [
          [ "Functions", "a00100.html", [
            [ "firm_gaussjordansolve", "a00100.html#ga4ac0ab8d5226cdea13ff1ac4c704a376", null ]
          ] ]
        ] ],
        [ "Hash Functions", "a00101.html", [
          [ "Functions", "a00101.html", [
            [ "hash_combine", "a00101.html#gafc0b995ae3a1e9bf74fc453773189676", null ],
            [ "hash_data", "a00101.html#gaf4c0b2e6d6ca99f8e357526a44d6af2e", null ],
            [ "hash_ptr", "a00101.html#gad549e392e9b584e3cd4fc6e7860ef9a1", null ],
            [ "hash_str", "a00101.html#ga832524c989651a359686458f6bbc4e38", null ]
          ] ]
        ] ],
        [ "Hungarian Algorithm", "a00102.html", [
          [ "Typedefs", "a00102.html", [
            [ "hungarian_problem_t", "a00102.html#ga6915204614f70330983728e9d5846274", null ]
          ] ],
          [ "Enumerations", "a00102.html", [
            [ "hungarian_mode_t", "a00102.html#ga282c38d2b264431748b4c8503082f0e8", null ],
            [ "match_type_t", "a00102.html#ga7aacdfc8f7c7f260b79f381214d5c067", null ]
          ] ],
          [ "Functions", "a00102.html", [
            [ "hungarian_add", "a00102.html#ga5752d62429b86c0787672b1b3415d98c", null ],
            [ "hungarian_free", "a00102.html#gaf825539db319a9fc43e7761d45766551", null ],
            [ "hungarian_new", "a00102.html#ga1d3f315c8e1c324ac5b7047b7eb573c0", null ],
            [ "hungarian_prepare_cost_matrix", "a00102.html#gaddbaa8ee61556225c0ebd1ad009478e0", null ],
            [ "hungarian_print_cost_matrix", "a00102.html#gab01f9d31f5e360669561c733c44d306d", null ],
            [ "hungarian_remove", "a00102.html#gaf12ab1a18dde821e6b8b30ab6cf8dcc0", null ],
            [ "hungarian_solve", "a00102.html#ga1586d5e77cef03fb7e7ffa1f168d56e9", null ]
          ] ]
        ] ]
      ] ],
      [ "Identifiers", "a00120.html", [
        [ "Typedefs", "a00120.html", [
          [ "ident", "a00120.html#ga4bd8b021c0e268b9ff812383a170e3d9", null ]
        ] ],
        [ "Functions", "a00120.html", [
          [ "get_id_str", "a00120.html#ga57bba4cfc91c1b4d90497ec4c54f9371", null ],
          [ "get_id_strlen", "a00120.html#ga84eb75a9f1d9a2b832414ef0cbb1318c", null ],
          [ "id_contains_char", "a00120.html#gafe00084e2243c4fa400e24fca8814c0a", null ],
          [ "id_decorate_win32_c_fkt", "a00120.html#ga122e57d755a20c643515a0be254df259", null ],
          [ "id_is_prefix", "a00120.html#ga6be64f398ebb2d9c99cca9af16da8518", null ],
          [ "id_is_suffix", "a00120.html#ga8dcc18f1336cb847b900603f355b38ce", null ],
          [ "id_mangle", "a00120.html#ga1a676ea7a5e7b8bf1406ad3a338eecf7", null ],
          [ "id_mangle3", "a00120.html#gaba7e939ffeebc6f0c33b112e4e9a2dad", null ],
          [ "id_mangle_dot", "a00120.html#ga44c2ad2f1218e757bdcb1908c31a3fc8", null ],
          [ "id_mangle_entity", "a00120.html#ga6e2c18a9afda98858c47e1aae37bdcf1", null ],
          [ "id_mangle_u", "a00120.html#ga1fbeef9a47870dd35072bc2dc3aa69ee", null ],
          [ "id_unique", "a00120.html#ga86858ef393279a843ceb6e29c6ee87f1", null ],
          [ "new_id_from_chars", "a00120.html#gac7d5d150294f1cc41e61171a60748e72", null ],
          [ "new_id_from_str", "a00120.html#ga1ed7af2af6eb549662fa580f16a2d29c", null ]
        ] ]
      ] ],
      [ "Visualisation", "a00123.html", [
        [ "Convenience Interface", "a00124.html", [
          [ "Typedefs", "a00124.html", [
            [ "ir_graph_dump_func", "a00124.html#gab5e709a71d0e75707633c519e51cf5dc", null ],
            [ "ir_prog_dump_func", "a00124.html#ga05435c3c9fed4396ae74ac2cd8b65dec", null ]
          ] ],
          [ "Functions", "a00124.html", [
            [ "dump_all_ir_graph_pass", "a00124.html#gabe3d63a69e9176aa042dfbd9418ab782", null ],
            [ "dump_all_ir_graphs", "a00124.html#ga6b4af569945f942fc20e09519d6aa234", null ],
            [ "dump_ir_graph", "a00124.html#gad1262d58554d79930bb04d4e8c3a3613", null ],
            [ "dump_ir_graph_ext", "a00124.html#gabd5b3acacd7f5fc9e50a617ff201b7fe", null ],
            [ "dump_ir_prog_ext", "a00124.html#gae03f0fd398a940f99e35e2f299099a51", null ],
            [ "ir_get_dump_filter", "a00124.html#ga6f9be8fef31b1525a3bb7f4c9f6ed531", null ],
            [ "ir_set_dump_filter", "a00124.html#gaa23494f080bea097da2c65ad9d11abcb", null ],
            [ "ir_set_dump_path", "a00124.html#gaf6a3646f63b3a5ccf09a48a52b8059ff", null ],
            [ "ir_should_dump", "a00124.html#ga582f8640adf8edc53953545c2b841c60", null ]
          ] ]
        ] ],
        [ "Typedefs", "a00123.html", [
          [ "dump_edge_vcgattr_func", "a00123.html#ga36fb005829c8cce9a9d10783e59005a9", null ],
          [ "dump_node_edge_func", "a00123.html#ga6621745773c0a7e8ee9e92cb66a303ca", null ],
          [ "dump_node_info_cb_t", "a00123.html#ga089bcfc60fe560f4925fc11d42185c16", null ],
          [ "dump_node_vcgattr_func", "a00123.html#ga61e39bb54eab9f6c6dabe821d2e74973", null ]
        ] ],
        [ "Enumerations", "a00123.html", [
          [ "ir_dump_flags_t", "a00123.html#ga894d1c54ac58d2f94381cdec6647ee51", null ],
          [ "ir_dump_verbosity_t", "a00123.html#ga3d119a4c72c822625277ce6b543f3e3c", null ]
        ] ],
        [ "Functions", "a00123.html", [
          [ "dump_add_node_info_callback", "a00123.html#ga6b36ee49647acdeeeff0a75b45112c26", null ],
          [ "dump_callgraph", "a00123.html#ga05b2782dd7c712f811fc109965b1bdc1", null ],
          [ "dump_callgraph_loop_tree", "a00123.html#ga8ac9d63084b3a99c9d63f9b03e5a74f5", null ],
          [ "dump_cfg", "a00123.html#ga7f8f7b6210504fdfa2789437d50c7fd2", null ],
          [ "dump_class_hierarchy", "a00123.html#ga1d0ae9b23af86d81644223fcc212e978", null ],
          [ "dump_entity_to_file", "a00123.html#ga666b431649bc772b5a6de35c0efa0788", null ],
          [ "dump_globals_as_text", "a00123.html#ga08042e9306c765ede231dbf1c032d8c7", null ],
          [ "dump_graph_as_text", "a00123.html#gad5c51594acb63838d5d423f9faac4785", null ],
          [ "dump_ir_graph_file", "a00123.html#ga256714387fca03ae62956efa86648686", null ],
          [ "dump_loop", "a00123.html#gad63d1831d3923f21a6a7699cee323e79", null ],
          [ "dump_loop_tree", "a00123.html#gaff46129404553de9a02abc7522bced68", null ],
          [ "dump_remove_node_info_callback", "a00123.html#ga7a240e2e9971ed14dbd08c257c864080", null ],
          [ "dump_type_to_file", "a00123.html#gaf8ff530a8bca70a6e52815431ff00f08", null ],
          [ "dump_typegraph", "a00123.html#ga4ad926d1c6e360da5cf97a03ff252a90", null ],
          [ "dump_types_as_text", "a00123.html#ga16a2fe95e1809e715757c8b2a26a1e96", null ],
          [ "get_dump_block_edge_hook", "a00123.html#ga93c933b6cc8f678a2adf8ae27bdf1e37", null ],
          [ "get_dump_node_edge_hook", "a00123.html#ga0b314a14c51c2366dd61b14fc1ca26aa", null ],
          [ "ir_add_dump_flags", "a00123.html#gaab3e7f06a2491b78645a262add372c68", null ],
          [ "ir_get_dump_flags", "a00123.html#ga2ed1aa0ddfe50d84b9b1f3b5e9c31ada", null ],
          [ "ir_get_dump_verbosity", "a00123.html#gae0361253ef432ab014ac416985f04c8c", null ],
          [ "ir_remove_dump_flags", "a00123.html#gad3a5ecd59faccfb7bfb6556084b85570", null ],
          [ "ir_set_dump_flags", "a00123.html#gae8f72fab0528ee955576d4992a54852e", null ],
          [ "ir_set_dump_verbosity", "a00123.html#ga36cd87bee25a1d51d04700ac451c8c91", null ],
          [ "set_dump_block_edge_hook", "a00123.html#gaa1cf977bf9b414ece4fb00402a4a8e3b", null ],
          [ "set_dump_edge_vcgattr_hook", "a00123.html#ga095c503f5150a71add0f0a5d21ec59db", null ],
          [ "set_dump_node_edge_hook", "a00123.html#ga7bd5dfae39fb2c382f819d21881f2221", null ],
          [ "set_dump_node_vcgattr_hook", "a00123.html#ga81799c07ef2d3f24eebcf3152d857ef7", null ]
        ] ]
      ] ],
      [ "Procedure Graph", "a00129.html", [
        [ "Construction Support", "a00121.html", [
          [ "Typedefs", "a00121.html", [
            [ "uninitialized_local_variable_func_t", "a00121.html#gaf88e1f2dfa54c46399b4ec95d1e7fe92", null ]
          ] ],
          [ "Functions", "a00121.html", [
            [ "add_immBlock_pred", "a00121.html#ga5c32bc5bb0d66afc58ab36726d9c0d02", null ],
            [ "find_value", "a00121.html#ga04860b7e5070a35724cee8e1297769fe", null ],
            [ "get_cur_block", "a00121.html#gaa16d7b43eabdaacfeebe723f949a6415", null ],
            [ "get_current_ir_graph", "a00121.html#ga628a05cf4a5905e294ac10a806cd5776", null ],
            [ "get_r_cur_block", "a00121.html#ga6ac9c51a86089fb0a46d9d9860b4a05d", null ],
            [ "get_r_store", "a00121.html#ga5deb8a500f920d19d972db5a8b6fd660", null ],
            [ "get_r_value", "a00121.html#ga863674d8be1ec6af088068636804cd37", null ],
            [ "get_store", "a00121.html#gafd30c492cd8a1179fc779cbe02058543", null ],
            [ "get_value", "a00121.html#gae6e0c5fd8de6634566cdffa47469f085", null ],
            [ "ir_guess_mode", "a00121.html#gaa9ee986e439d6159b573d61051d00ca6", null ],
            [ "ir_r_guess_mode", "a00121.html#gac792cc9505bc7fa54dd67ddeb74ecb11", null ],
            [ "ir_set_uninitialized_local_variable_func", "a00121.html#ga832234dcad5394011b724d063220e899", null ],
            [ "irg_finalize_cons", "a00121.html#gab2229c80fbc4178609cc72695851ae61", null ],
            [ "irp_finalize_cons", "a00121.html#ga905adfa3467e4a826458afee8e5efe59", null ],
            [ "keep_alive", "a00121.html#gaa09b888c151f78ab4e4b87fcce9e1e10", null ],
            [ "mature_immBlock", "a00121.html#ga3523243aac57d59c24aeab89e3f287b1", null ],
            [ "new_d_immBlock", "a00121.html#ga5b23ad74439fbbe68edce4de72f84351", null ],
            [ "new_immBlock", "a00121.html#ga61909db28409ef39b1a15fc2fecfd473", null ],
            [ "new_r_immBlock", "a00121.html#ga089af3b5b872df2ddcf5a474d2e5a6dd", null ],
            [ "new_rd_immBlock", "a00121.html#gaad694f0bea87147faac3198e5cdb4749", null ],
            [ "r_find_value", "a00121.html#ga9b902a640d13899210c9c60295d8c88d", null ],
            [ "set_cur_block", "a00121.html#gaa7a7d46930d3d0350bad6674d00bdef3", null ],
            [ "set_current_ir_graph", "a00121.html#gaf20b84027fbbe268e4368de29ee922cf", null ],
            [ "set_r_cur_block", "a00121.html#ga8fd3f0cc6028c241d0995865c844c384", null ],
            [ "set_r_store", "a00121.html#gabdfb5e4e9a214bd7626be7af34252765", null ],
            [ "set_r_value", "a00121.html#ga91d32c7eb23b5b5d2211f1ce010481a8", null ],
            [ "set_store", "a00121.html#ga4ba3b9f913acac6affefed7e98b8bdcb", null ],
            [ "set_value", "a00121.html#gaaec0562e14c86007c68dc1f664187396", null ]
          ] ],
          [ "Variables", "a00121.html", [
            [ "current_ir_graph", "a00121.html#ga5f358a84328c07ec4a90fa1bcdf4354e", null ]
          ] ]
        ] ],
        [ "Traversing", "a00130.html", [
          [ "Typedefs", "a00130.html", [
            [ "irg_walk_func", "a00130.html#ga75e5760f868016b539a303891b941055", null ]
          ] ],
          [ "Functions", "a00130.html", [
            [ "all_irg_walk", "a00130.html#gaf6b25123eb02dab20576df77074b6ad6", null ],
            [ "irg_block_walk", "a00130.html#gae05e2298722b9f43e1941570e51b8fc8", null ],
            [ "irg_block_walk_graph", "a00130.html#ga049666726c03973f88d0292d2413fc2b", null ],
            [ "irg_walk", "a00130.html#ga45f80063244ae477e17cbd10f68ae3da", null ],
            [ "irg_walk_2", "a00130.html#ga14bc8d434ece8382cbe47774ad71ce17", null ],
            [ "irg_walk_anchors", "a00130.html#ga7258b0656b66416d2110125325cfefc3", null ],
            [ "irg_walk_blkwise_dom_top_down", "a00130.html#gad762660f541beaafedfa563c986280ae", null ],
            [ "irg_walk_blkwise_graph", "a00130.html#ga5db5e2b9a13882a263a9b8f26ece454b", null ],
            [ "irg_walk_core", "a00130.html#gaee821cd6584113abd7fcbdcb5e48fa0a", null ],
            [ "irg_walk_graph", "a00130.html#ga9579ab26fdc714681d7b5d1f0168cdf7", null ],
            [ "irg_walk_in_or_dep", "a00130.html#gaa88f0f242f53d0c86da3b749ece6c195", null ],
            [ "irg_walk_in_or_dep_blkwise_graph", "a00130.html#ga387a9f0cdd820d0aa173b36b3e132f23", null ],
            [ "irg_walk_in_or_dep_graph", "a00130.html#ga4b7e49cdcb8e8d8543b49be7d1b70b36", null ],
            [ "walk_const_code", "a00130.html#gae04f6f4501324455693eca6757082e70", null ]
          ] ]
        ] ],
        [ "Nodes", "a00135.html", [
          [ "Node Opcodes", "a00136.html", [
            [ "Defines", "a00136.html", [
              [ "NULL_FUNC", "a00136.html#ga3199c7ce51542779577d1cd090385a22", null ]
            ] ],
            [ "Typedefs", "a00136.html", [
              [ "computed_value_func", "a00136.html#ga787672533f48612609f38afcdc501e5c", null ],
              [ "copy_attr_func", "a00136.html#ga422bf278ca2da0a79974c5404a09928a", null ],
              [ "dump_node_func", "a00136.html#ga0ac696f1cc21c2f95229c9f8f31deed2", null ],
              [ "equivalent_node_func", "a00136.html#ga4a065490d1a803e0679188bb89dcdcc7", null ],
              [ "get_entity_attr_func", "a00136.html#gae77db350dd766ececbcf1ef8473fcdad", null ],
              [ "get_type_attr_func", "a00136.html#gac5ef561dba7f611ffb35f9b321ad40b2", null ],
              [ "hash_func", "a00136.html#ga91a89521556ecdb72054389489b1825a", null ],
              [ "ir_op", "a00136.html#ga648721c6bb498028cd5df546bda46cf2", null ],
              [ "node_cmp_attr_func", "a00136.html#gaf714fda332f82d6c8500226bc73badfa", null ],
              [ "op_func", "a00136.html#gaa3e171cbdfacdb3a349a3d93a994b510", null ],
              [ "reassociate_func", "a00136.html#ga9c3069527f5b67ad12bdd9e6281b0d0a", null ],
              [ "transform_node_func", "a00136.html#gac2182a4fa7d2fbba313cfcf92a231b51", null ],
              [ "verify_node_func", "a00136.html#gaeac08ebf60ff2a6fbb2c3985b66ac4b8", null ],
              [ "verify_proj_node_func", "a00136.html#ga2ac55e416db919afd72eb714db6c3a42", null ]
            ] ],
            [ "Enumerations", "a00136.html", [
              [ "dump_reason_t", "a00136.html#ga54a4ed7f58abb88a743103f29d8f6f90", null ],
              [ "ir_opcode", "a00136.html#gade3b5737e8a4d99f1f8ab86bcc0f9eeb", null ],
              [ "irop_flags", "a00136.html#ga89287ba55d230a5e028f287663fa3bfa", null ],
              [ "op_arity", "a00136.html#gac4329f6d7dfaaf804ae88307db71c65f", null ]
            ] ],
            [ "Functions", "a00136.html", [
              [ "get_generic_function_ptr", "a00136.html#ga627d6ffb52017f211c762b62b03c1491", null ],
              [ "get_next_ir_opcode", "a00136.html#gaee7e1368f6db9fb0ee6c6de5cc1b512e", null ],
              [ "get_next_ir_opcodes", "a00136.html#gafb33064549c69b4e38f7a0b9a20fd83a", null ],
              [ "get_op_code", "a00136.html#gafcd6f89d577abd3f57ba5655a213591f", null ],
              [ "get_op_flags", "a00136.html#ga1b0d60410a2bf0ea4b5a0bc5ddb82a30", null ],
              [ "get_op_ident", "a00136.html#ga1aedd8edd2ae3ac6e900b5ca9ab31433", null ],
              [ "get_op_name", "a00136.html#gad6b942be620a94652b01321ce8635c88", null ],
              [ "get_op_ops", "a00136.html#gab71e409f27ff456bbb717137db909343", null ],
              [ "get_op_pin_state_name", "a00136.html#ga903c7ef4b802824b09df862fd2a8a3e1", null ],
              [ "get_op_pinned", "a00136.html#ga792c29a4030f1a67915d0b4fb160b841", null ],
              [ "ir_clear_opcodes_generic_func", "a00136.html#ga041ec4d2074f0ecf14e28d3675e9bebd", null ],
              [ "ir_get_n_opcodes", "a00136.html#gaad56d93f03a63dc5e3e01ba9128de4a6", null ],
              [ "ir_get_opcode", "a00136.html#gad66662e7b54a84882ee6043dff00871b", null ],
              [ "ir_op_set_fragile_indices", "a00136.html#ga8e60f692104e901a985443c6cad9a1d1", null ],
              [ "ir_op_set_memory_index", "a00136.html#ga498adb0e3c54d64cc83218b71429b7f3", null ],
              [ "new_ir_op", "a00136.html#ga272a68aae5cabc441309d450c80f937c", null ],
              [ "set_generic_function_ptr", "a00136.html#gaa9de5da16522693cf6db7ba4853dd6f7", null ],
              [ "set_op_pinned", "a00136.html#ga4c7025d8978ddf595451718d46965694", null ]
            ] ],
            [ "Data Structures", "a00136.html", [
              [ "ir_op_ops", "a00011.html", null ]
            ] ]
          ] ],
          [ "ASM node", "a00143.html", [
            [ "Enumerations", "a00143.html", [
              [ "n_ASM", "a00143.html#gad35ec176a80aadfacf5da4c37ff7fb90", null ]
            ] ],
            [ "Functions", "a00143.html", [
              [ "get_ASM_clobbers", "a00143.html#ga05979cc16315eb8c319d57edd7dfdcb3", null ],
              [ "get_ASM_input_constraints", "a00143.html#gabc619d35188c927865a8add6607ff13b", null ],
              [ "get_ASM_mem", "a00143.html#ga1c084333593e61f7c27a7f78b161fa1e", null ],
              [ "get_ASM_n_clobbers", "a00143.html#ga4defb2e44e13d32d30b311db62be0e9a", null ],
              [ "get_ASM_n_input_constraints", "a00143.html#ga8227fbb90cc3e00d6af56dd256d60724", null ],
              [ "get_ASM_n_output_constraints", "a00143.html#ga54fb91ed1299835acbdeeea5bb8c8623", null ],
              [ "get_ASM_output_constraints", "a00143.html#gab3d023535efbcfca10990d3b21b30624", null ],
              [ "get_ASM_text", "a00143.html#gaadb875ca1c8a87b76c9ee5bc1c36691f", null ],
              [ "get_op_ASM", "a00143.html#gaaa42924f654e970ca0e6bd9786b0f8af", null ],
              [ "is_ASM", "a00143.html#gaffe493f7400f5f8b010d6c4c6aea8348", null ],
              [ "new_ASM", "a00143.html#ga4f1e770f1ea63c4d216907a06381063c", null ],
              [ "new_d_ASM", "a00143.html#gaa57746a2a26e01237e3de34479d68c14", null ],
              [ "new_r_ASM", "a00143.html#ga0916e9e1a4652fc2bfa9efe9ad54c186", null ],
              [ "new_rd_ASM", "a00143.html#gaa617a5054364aa0cb0a3b1bb6bebbffd", null ],
              [ "set_ASM_clobbers", "a00143.html#ga3d33d8e69689e195bc8a4665ad09b718", null ],
              [ "set_ASM_input_constraints", "a00143.html#ga518955c515d74f4327c7a4c56d09590e", null ],
              [ "set_ASM_mem", "a00143.html#gaaeecb3bf391e8d1b8c29b49d0bde9efd", null ],
              [ "set_ASM_output_constraints", "a00143.html#ga544fe6ba24736c499dc8cf1ca0a1301e", null ],
              [ "set_ASM_text", "a00143.html#gae33eb51cbd1b12074e15970b8eba2d10", null ]
            ] ],
            [ "Variables", "a00143.html", [
              [ "op_ASM", "a00143.html#gadcf21672542890e00f520391b668dc4f", null ]
            ] ],
            [ "Data Structures", "a00143.html", [
              [ "ir_asm_constraint", "a00010.html", null ]
            ] ]
          ] ],
          [ "Add node", "a00144.html", [
            [ "Enumerations", "a00144.html", [
              [ "n_Add", "a00144.html#ga0fe8eb67d5faf4348be080570ba78390", null ]
            ] ],
            [ "Functions", "a00144.html", [
              [ "get_Add_left", "a00144.html#gacd6158de4cbaac695762e537242ca146", null ],
              [ "get_Add_right", "a00144.html#gad25876e064ea40a85a07c14a53edeaec", null ],
              [ "get_op_Add", "a00144.html#gaf809b748c405203f703e824e34b13b0b", null ],
              [ "is_Add", "a00144.html#gad4a820cd6d340a5db303d932ce9f1af8", null ],
              [ "new_Add", "a00144.html#ga03816dbde3fef530ea0d6b019b635021", null ],
              [ "new_d_Add", "a00144.html#gae913f39f0afd72a2f7cc05394907be6a", null ],
              [ "new_r_Add", "a00144.html#ga5db2d7bf5ca0c2abe3c5caa964d9917b", null ],
              [ "new_rd_Add", "a00144.html#gaf6df35fcdf7b83622ffc8cc381d1054b", null ],
              [ "set_Add_left", "a00144.html#gab1e637a42b1ab40ad7613bd37ac9036d", null ],
              [ "set_Add_right", "a00144.html#ga207c2e3e0a494c4e519e68859df946e6", null ]
            ] ],
            [ "Variables", "a00144.html", [
              [ "op_Add", "a00144.html#ga4837e9abbf74f78b9cb0cf553761466e", null ]
            ] ]
          ] ],
          [ "Alloc node", "a00145.html", [
            [ "Enumerations", "a00145.html", [
              [ "ir_where_alloc", "a00145.html#ga43cd2b56bc2b533404abecc592dc670d", null ],
              [ "n_Alloc", "a00145.html#ga9f448104484adc6766ce8af0a5010ed1", null ],
              [ "pn_Alloc", "a00145.html#gac1e5c2caa9446fb5e8fd3b30034785ff", null ]
            ] ],
            [ "Functions", "a00145.html", [
              [ "get_Alloc_count", "a00145.html#ga94858ec741d7b7b0b836bfa70af65214", null ],
              [ "get_Alloc_mem", "a00145.html#ga2da3f38c031d30bf4c1387635252dac4", null ],
              [ "get_Alloc_type", "a00145.html#ga341d511c32fd8757d618997606f502e2", null ],
              [ "get_Alloc_where", "a00145.html#gaffc47f417b4855dc55e2e0b7bf81ac1d", null ],
              [ "get_op_Alloc", "a00145.html#ga03b9cf582778f2c275cbaf03958326ab", null ],
              [ "is_Alloc", "a00145.html#ga84ddf3f89cc2b7d160ca39e41d4db584", null ],
              [ "new_Alloc", "a00145.html#ga56e449881bcc52e4e6c3f1e225d056b7", null ],
              [ "new_d_Alloc", "a00145.html#ga7f642002a0e6814cc4813fa45575956f", null ],
              [ "new_r_Alloc", "a00145.html#gaf11bb3348b9745f4843f8bbfb3d3e45d", null ],
              [ "new_rd_Alloc", "a00145.html#ga6f961075436c7df95acc04a6a4e4393a", null ],
              [ "set_Alloc_count", "a00145.html#gacaf5d4a65db5fe8ff8610fab342bd560", null ],
              [ "set_Alloc_mem", "a00145.html#ga537cd69836ceac60fa948d6f1b981048", null ],
              [ "set_Alloc_type", "a00145.html#ga4a1e1b59ebe352992d4da40fa79cba9d", null ],
              [ "set_Alloc_where", "a00145.html#gac891713075e5377bf880d8081c368e30", null ]
            ] ],
            [ "Variables", "a00145.html", [
              [ "op_Alloc", "a00145.html#ga1ccb745bc5c63e0e1571a4f892884299", null ]
            ] ]
          ] ],
          [ "Anchor node", "a00146.html", [
            [ "Functions", "a00146.html", [
              [ "get_op_Anchor", "a00146.html#gac6d9642bdfae7775261952ad3751aa69", null ],
              [ "is_Anchor", "a00146.html#ga265ee2cbef4b401835e40a00a8c6d087", null ]
            ] ],
            [ "Variables", "a00146.html", [
              [ "op_Anchor", "a00146.html#ga328a99f275210739d9e4f1cbf6f23f4b", null ]
            ] ]
          ] ],
          [ "And node", "a00147.html", [
            [ "Enumerations", "a00147.html", [
              [ "n_And", "a00147.html#gad19e6451ada4bbd0c04bf8021dcf75e7", null ]
            ] ],
            [ "Functions", "a00147.html", [
              [ "get_And_left", "a00147.html#ga72ddd813b1413c17fe084a191b4d9ed1", null ],
              [ "get_And_right", "a00147.html#ga87387f252f6a79fd5ea6c48b520b1403", null ],
              [ "get_op_And", "a00147.html#ga97dcd446a52d45e4980d09e2c78b8440", null ],
              [ "is_And", "a00147.html#gac23c7d4169ec24f8f1833fceda91dc47", null ],
              [ "new_And", "a00147.html#ga5b539507290f545c7183a26a64efa71b", null ],
              [ "new_d_And", "a00147.html#ga5aed53efeda83dd3c0c511868c9c5d48", null ],
              [ "new_r_And", "a00147.html#ga6637405a0f8addffa9f11f0d09f23438", null ],
              [ "new_rd_And", "a00147.html#ga1d09f4d7b64168e21ec63defdedbacb9", null ],
              [ "set_And_left", "a00147.html#gac4e39f9b6cfa9e3c2be72609bcef2379", null ],
              [ "set_And_right", "a00147.html#ga35552e0ea846b3acc588ef1e935206fb", null ]
            ] ],
            [ "Variables", "a00147.html", [
              [ "op_And", "a00147.html#ga997be587aeb49b56ec3f367dcdd6fbc6", null ]
            ] ]
          ] ],
          [ "Bad node", "a00148.html", [
            [ "Functions", "a00148.html", [
              [ "get_op_Bad", "a00148.html#gacd187a5d38d3fd1686fd4e5bb3cead50", null ],
              [ "is_Bad", "a00148.html#ga74336b4e4138547e2c9e5cf2d4cf07c3", null ],
              [ "new_Bad", "a00148.html#gae91aed2dd6e3e3c237534123e094dd03", null ],
              [ "new_d_Bad", "a00148.html#gad113c94d19372ee8a2e28ab3685b0d0a", null ],
              [ "new_r_Bad", "a00148.html#ga1e4c9d95eb323ed9b26c1e6f4290c76d", null ],
              [ "new_rd_Bad", "a00148.html#ga04e0d5c8f30a7128010f0b132363614e", null ]
            ] ],
            [ "Variables", "a00148.html", [
              [ "op_Bad", "a00148.html#ga00a5b5cf3adac394edadf8e0b8b7bd84", null ]
            ] ]
          ] ],
          [ "Block node", "a00149.html", [
            [ "Functions", "a00149.html", [
              [ "add_Block_phi", "a00149.html#ga84c3606c7444b4bde3841f8270183d5b", null ],
              [ "Block_block_visited", "a00149.html#ga59a8038983c9f82048e473766ecdfd6f", null ],
              [ "create_Block_entity", "a00149.html#gaac0564e3725f87b9889ba16afec51bfa", null ],
              [ "get_Block_block_visited", "a00149.html#ga5860e03cea729c16019a71b6aeaf81d6", null ],
              [ "get_Block_cfgpred", "a00149.html#ga9b9c0399c0c68c9867ba75a98d261abb", null ],
              [ "get_Block_cfgpred_block", "a00149.html#ga56ff33d83f4d0acbe683dc97f690ab36", null ],
              [ "get_Block_cfgpred_pos", "a00149.html#ga5875ce92dd033613f9be67674c91f5e4", null ],
              [ "get_Block_entity", "a00149.html#ga87267b455253f84041812052e028f639", null ],
              [ "get_Block_extbb", "a00149.html#gaee6a3d2c14feada4361c473dfa55bc74", null ],
              [ "get_Block_irg", "a00149.html#gab75d8d16e2c30202fd005713706423c6", null ],
              [ "get_Block_mark", "a00149.html#ga6612a84c0fd38ebf5b2c2f047123c4e6", null ],
              [ "get_Block_matured", "a00149.html#gaf5d2f69855ecaa483cd0c2a41173b650", null ],
              [ "get_Block_n_cfgpreds", "a00149.html#ga8b10f2f2a261c55d1eccebe3e03ec40b", null ],
              [ "get_Block_phis", "a00149.html#gade5b8bc27593af6d64169c0c45e8702e", null ],
              [ "get_nodes_block", "a00149.html#ga024447fe2730af2462d859923b868f91", null ],
              [ "get_op_Block", "a00149.html#ga15589059aea11af93fcd4c983b038b1c", null ],
              [ "is_Block", "a00149.html#ga3f28d4c204274002e2c968de17d5f82f", null ],
              [ "mark_Block_block_visited", "a00149.html#ga5419377ddf5c2114edb36fa2a3e9c12e", null ],
              [ "new_Block", "a00149.html#ga695e37e1ae2c8e5acb67703aaec0678d", null ],
              [ "new_d_Block", "a00149.html#gab63eb27708e2eb2631655b876334dba0", null ],
              [ "new_r_Block", "a00149.html#ga6f84f8217e876836ddb93d8456d3f94f", null ],
              [ "new_rd_Block", "a00149.html#ga8ffb002674c886b0d5a6dff70f358f96", null ],
              [ "set_Block_block_visited", "a00149.html#ga81d672d56ac6d68639de42d71d2d401c", null ],
              [ "set_Block_cfgpred", "a00149.html#ga7d75475d451473b8144d1bb1305bb588", null ],
              [ "set_Block_entity", "a00149.html#ga9c80f89a89b28e90053e3bb69888f319", null ],
              [ "set_Block_extbb", "a00149.html#ga1cdff2e45f9998da55492d8b18b94940", null ],
              [ "set_Block_mark", "a00149.html#gaa0d7ffa9194a04a551ebfadfcdc78544", null ],
              [ "set_Block_matured", "a00149.html#ga8157c678b14fb4a52648fe5abe89c741", null ],
              [ "set_Block_phis", "a00149.html#ga0a5b9a314e87973c6991e70ee289153b", null ],
              [ "set_nodes_block", "a00149.html#gae3b8909a619eb76f9be35b378424758f", null ]
            ] ],
            [ "Variables", "a00149.html", [
              [ "op_Block", "a00149.html#gab60b1226ce90d562bec2a64d1097442a", null ]
            ] ]
          ] ],
          [ "Borrow node", "a00150.html", [
            [ "Enumerations", "a00150.html", [
              [ "n_Borrow", "a00150.html#ga5a5b6d1e7acf962684d977199d9a2470", null ]
            ] ],
            [ "Functions", "a00150.html", [
              [ "get_Borrow_left", "a00150.html#ga64be8bd228411eb189fc5b30d9bdffe8", null ],
              [ "get_Borrow_right", "a00150.html#ga9b5e04658ab8393a4d59ec30743ced0a", null ],
              [ "get_op_Borrow", "a00150.html#ga814f9046793ca2f78e491c1f98ea3aea", null ],
              [ "is_Borrow", "a00150.html#gadc994fc666956c2f84feb071982021e9", null ],
              [ "new_Borrow", "a00150.html#ga9ae8721849b088506a8e768fc37e6bf8", null ],
              [ "new_d_Borrow", "a00150.html#gad591cb07fedb438ce607c4ec00e2a7e1", null ],
              [ "new_r_Borrow", "a00150.html#ga948e901dd9f2d302cadc9597dc61e77c", null ],
              [ "new_rd_Borrow", "a00150.html#gac6604fb55d64297abc4647c31248e06d", null ],
              [ "set_Borrow_left", "a00150.html#ga96bf780bcebab63c5c182840fcbedb9e", null ],
              [ "set_Borrow_right", "a00150.html#ga556f95852fb1aad238db19f6da55aa03", null ]
            ] ],
            [ "Variables", "a00150.html", [
              [ "op_Borrow", "a00150.html#ga34c85394ffb823b23fd0756f288d742a", null ]
            ] ]
          ] ],
          [ "Bound node", "a00151.html", [
            [ "Enumerations", "a00151.html", [
              [ "n_Bound", "a00151.html#ga5d5ab35f46450ec66c5bfbcb7d7eb71a", null ],
              [ "pn_Bound", "a00151.html#ga6d982c8c124d457b6ad6478418a1bc47", null ]
            ] ],
            [ "Functions", "a00151.html", [
              [ "get_Bound_index", "a00151.html#gab412d8521350696fd9623b14a3af420b", null ],
              [ "get_Bound_lower", "a00151.html#ga3e2801a95ecef6e4785981ef68dcc27a", null ],
              [ "get_Bound_mem", "a00151.html#gad0511cfb98e289f74aed84eca0cfc9be", null ],
              [ "get_Bound_upper", "a00151.html#gac9ed651b242b220c71f3d27bad82c954", null ],
              [ "get_op_Bound", "a00151.html#ga256fbf68f7451350be2ae5016abd4e20", null ],
              [ "is_Bound", "a00151.html#gaa7cfc49c1661e219788f1c194ce2dd92", null ],
              [ "new_Bound", "a00151.html#ga8bbe11dab592692c7e2de972ac18d36f", null ],
              [ "new_d_Bound", "a00151.html#ga23ada1ed8818d958483d30cd6dd4c057", null ],
              [ "new_r_Bound", "a00151.html#gafd4b65ce42ad0bcf0cf4c20cc7ca7021", null ],
              [ "new_rd_Bound", "a00151.html#gae49fd95a00f44117741b336c64e6e990", null ],
              [ "set_Bound_index", "a00151.html#gae8550537040a6df9cfce6e3639f4bd40", null ],
              [ "set_Bound_lower", "a00151.html#gaebc43b7e66ac5577a45fbf582bda717a", null ],
              [ "set_Bound_mem", "a00151.html#gadcb48fee6a645dc7202a53a743ea846c", null ],
              [ "set_Bound_upper", "a00151.html#ga1005508b353d4a5e870eb90cbdb4e3cd", null ]
            ] ],
            [ "Variables", "a00151.html", [
              [ "op_Bound", "a00151.html#gad132aecce73304b18184a763b200ee30", null ]
            ] ]
          ] ],
          [ "Builtin node", "a00152.html", [
            [ "Enumerations", "a00152.html", [
              [ "ir_builtin_kind", "a00152.html#ga9721e215b170504469ca71afa9d47d67", null ],
              [ "n_Builtin", "a00152.html#gaed0cbd2a3b9e9f5cd15abf9022e3543d", null ],
              [ "pn_Builtin", "a00152.html#ga95f1a30f48daa6292ef1a3a78866d474", null ]
            ] ],
            [ "Functions", "a00152.html", [
              [ "get_Builtin_kind", "a00152.html#ga415adf2d809b6a9f235769ed09f20dfe", null ],
              [ "get_Builtin_mem", "a00152.html#ga0546e71e3736a3d8d00a12f1d6461aa2", null ],
              [ "get_Builtin_n_params", "a00152.html#ga3a8a8efceb7fbfc10b7d3e2f51b6ac92", null ],
              [ "get_Builtin_param", "a00152.html#gac004386e8f56c1c6c588f177c23a36e2", null ],
              [ "get_Builtin_param_arr", "a00152.html#gad52df867e77e8f1d811f7d22bdb4ecc8", null ],
              [ "get_Builtin_type", "a00152.html#gaa7f2cdcbeb178bd303136cd9ff8c6f67", null ],
              [ "get_op_Builtin", "a00152.html#gabd5dbc5f6fa4c3ec9ac3d88078bab7de", null ],
              [ "is_Builtin", "a00152.html#ga3696dda86a0d154d6ed6d70a3c802f51", null ],
              [ "new_Builtin", "a00152.html#gab05455b0419a3d31043b5fee8477446a", null ],
              [ "new_d_Builtin", "a00152.html#gaeb65c9e7393c2abe93ebe96783a3fed4", null ],
              [ "new_r_Builtin", "a00152.html#ga3984a9e30e7f78d56d12030f6b8aae04", null ],
              [ "new_rd_Builtin", "a00152.html#ga1e8b27955742e9f37fba5dfe3351e7db", null ],
              [ "set_Builtin_kind", "a00152.html#ga22f0a4c0ae815344a9656d45a79981c1", null ],
              [ "set_Builtin_mem", "a00152.html#gae3efa295a4ebcade072af99077b0e6ef", null ],
              [ "set_Builtin_param", "a00152.html#gadeb146c5a71b2f38b79386f3c9f2f5b3", null ],
              [ "set_Builtin_type", "a00152.html#ga62aa00126aa66fb4366560ad6beb6d5f", null ]
            ] ],
            [ "Variables", "a00152.html", [
              [ "op_Builtin", "a00152.html#ga877d1ab26969f25c583891cabcea85db", null ]
            ] ]
          ] ],
          [ "Call node", "a00153.html", [
            [ "Enumerations", "a00153.html", [
              [ "n_Call", "a00153.html#gaa56c367f4ef491c91347a4642fbadafc", null ],
              [ "pn_Call", "a00153.html#gae689404e4130848370970e5fe5574f44", null ]
            ] ],
            [ "Functions", "a00153.html", [
              [ "Call_has_callees", "a00153.html#gacb8ffa3bd8e75259b5799132ed8b3eae", null ],
              [ "get_Call_callee", "a00153.html#ga51bdd49a9b6fa5769d7266ac31f2410d", null ],
              [ "get_Call_mem", "a00153.html#ga6535117c5846bf74ea80feb45cd4c71c", null ],
              [ "get_Call_n_callees", "a00153.html#ga6471ba5145ebc582e1d0cf2c34bd008e", null ],
              [ "get_Call_n_params", "a00153.html#ga5f86b5aa1cf14a9212fbd5f70a7f461e", null ],
              [ "get_Call_param", "a00153.html#gad06fa1f45fab1952d279bceb15c49aed", null ],
              [ "get_Call_param_arr", "a00153.html#ga513ab47a3dbe50d7e84195bb08e578ee", null ],
              [ "get_Call_ptr", "a00153.html#gaf66832dc4ca9c4907f6850abb3827a1d", null ],
              [ "get_Call_type", "a00153.html#ga7e4be31e0eba9bb8846fc294fcb9f058", null ],
              [ "get_op_Call", "a00153.html#gab0d89afc902c2a1383d66b76a8a06db9", null ],
              [ "is_Call", "a00153.html#gae3070d3c61f2fd916e1e654631f166be", null ],
              [ "new_Call", "a00153.html#ga232e9feef3edd8a29fbd639edcc6609e", null ],
              [ "new_d_Call", "a00153.html#gabcb14cb65ccc32903c69a4f16b558df6", null ],
              [ "new_r_Call", "a00153.html#ga854c795edc41427e0039ed7e56a3e919", null ],
              [ "new_rd_Call", "a00153.html#ga0c0595ccbfe092b89760e54feb51f2d3", null ],
              [ "remove_Call_callee_arr", "a00153.html#ga15a59d9f08dbffae036c7cad56df5db0", null ],
              [ "set_Call_callee_arr", "a00153.html#ga1e6c7c933cc54de881b7feb97c1932f0", null ],
              [ "set_Call_mem", "a00153.html#ga3bcd3f94f1229f728c747526fdb93713", null ],
              [ "set_Call_param", "a00153.html#ga12594e31eaae00b6cc72d97953a92c10", null ],
              [ "set_Call_ptr", "a00153.html#ga9cb1a77893f7f142522624e5b6d4f739", null ],
              [ "set_Call_type", "a00153.html#gaf3f7add84940f164a66e4be6bc2e2351", null ]
            ] ],
            [ "Variables", "a00153.html", [
              [ "op_Call", "a00153.html#gaaf2a687d95d98c84656f394d8756e998", null ]
            ] ]
          ] ],
          [ "Carry node", "a00154.html", [
            [ "Enumerations", "a00154.html", [
              [ "n_Carry", "a00154.html#gab808c034479b2bb1c359d8b33dceb977", null ]
            ] ],
            [ "Functions", "a00154.html", [
              [ "get_Carry_left", "a00154.html#ga00e239312c4afcffdec3abaa46d8e1c1", null ],
              [ "get_Carry_right", "a00154.html#gad5dc65ab27b4cc29f73eea5278c46f75", null ],
              [ "get_op_Carry", "a00154.html#gae4b6acd9a69c5374b7496e874af30e51", null ],
              [ "is_Carry", "a00154.html#ga832422796f70eebf7550aea9174f2c22", null ],
              [ "new_Carry", "a00154.html#gab7e2472b0b0131aacbaa3936695565a4", null ],
              [ "new_d_Carry", "a00154.html#ga5e146789f9e82b93745f256e2a4952b3", null ],
              [ "new_r_Carry", "a00154.html#ga813cbc28adbce5405aafd9edef1e248d", null ],
              [ "new_rd_Carry", "a00154.html#ga4aff85aa52c5d77e48276d5ca8dadb0f", null ],
              [ "set_Carry_left", "a00154.html#gafe3e1e1d9a09f82d8ffe1898918d5025", null ],
              [ "set_Carry_right", "a00154.html#ga1b226aea63ed028d9866595e8530060b", null ]
            ] ],
            [ "Variables", "a00154.html", [
              [ "op_Carry", "a00154.html#gac1e1a8b500b28b8d412222af2b56003b", null ]
            ] ]
          ] ],
          [ "Cast node", "a00155.html", [
            [ "Enumerations", "a00155.html", [
              [ "n_Cast", "a00155.html#ga19357f93cfa08ca637e3af0603a3e449", null ]
            ] ],
            [ "Functions", "a00155.html", [
              [ "get_Cast_op", "a00155.html#ga499891f0b35256a693785775342337a8", null ],
              [ "get_Cast_type", "a00155.html#ga94c88b9e36275427898313339fd4324c", null ],
              [ "get_op_Cast", "a00155.html#gaf8525dc3122afd5ce7cb021be0914a56", null ],
              [ "is_Cast", "a00155.html#ga930dc595387bed385750fcb82a6fd616", null ],
              [ "is_Cast_downcast", "a00155.html#gad6090f1e1681e2ce3d1e52448a07e109", null ],
              [ "is_Cast_upcast", "a00155.html#gadef8cfed8202185f48dd5c7490e3e37e", null ],
              [ "new_Cast", "a00155.html#ga39afe718a682c1a61d6fcc7d82b4ccc9", null ],
              [ "new_d_Cast", "a00155.html#gab716b6288033bd58e94859ba7f2dc4e3", null ],
              [ "new_r_Cast", "a00155.html#gadb19eccb0c4a152c80eb68038f771704", null ],
              [ "new_rd_Cast", "a00155.html#ga61c93acd33b8ad2ca627a8ae6fa9a0d2", null ],
              [ "set_Cast_op", "a00155.html#ga92ad5e23a07f8378c9ed7871c2b6158c", null ],
              [ "set_Cast_type", "a00155.html#ga6e9c5d326a7d29634790d9a3fbce3b1e", null ]
            ] ],
            [ "Variables", "a00155.html", [
              [ "op_Cast", "a00155.html#gaa8e756f73d86ab1bfea2e309e9cdfb13", null ]
            ] ]
          ] ],
          [ "Cmp node", "a00156.html", [
            [ "Enumerations", "a00156.html", [
              [ "n_Cmp", "a00156.html#gab9c13058e1bf0ee5e3c4da3d7d4381b0", null ]
            ] ],
            [ "Functions", "a00156.html", [
              [ "get_Cmp_left", "a00156.html#ga13e64703c17952d1de4d187311ec17de", null ],
              [ "get_Cmp_relation", "a00156.html#gaf0f92d01e0ea1f70d9ef00c1f551e32f", null ],
              [ "get_Cmp_right", "a00156.html#ga0d2ed7564c44c2929b71e68129fc9ecc", null ],
              [ "get_op_Cmp", "a00156.html#ga83d4d9423c31bac06c6d49820b380891", null ],
              [ "is_Cmp", "a00156.html#gae0f337751ff688271f879d9ced1af46d", null ],
              [ "new_Cmp", "a00156.html#ga78cb6100e459b125e1fbbf1266bf88a3", null ],
              [ "new_d_Cmp", "a00156.html#ga432e893f2e9a6ed432e94fbd7b64d693", null ],
              [ "new_r_Cmp", "a00156.html#gafb63f5d0baa5338f1ac8ee6c127b642d", null ],
              [ "new_rd_Cmp", "a00156.html#ga40758d7fe35010f7ec08a917a5a615af", null ],
              [ "set_Cmp_left", "a00156.html#ga9e16de9da4a3cce80e3e6a5e3a31d461", null ],
              [ "set_Cmp_relation", "a00156.html#ga583949bc8de1f1698b3ad0f457d63543", null ],
              [ "set_Cmp_right", "a00156.html#ga7d7cbcaf68ebd6f13666d59c58c5f805", null ]
            ] ],
            [ "Variables", "a00156.html", [
              [ "op_Cmp", "a00156.html#ga09291a2292e7be7bd4e33284d4daf670", null ]
            ] ]
          ] ],
          [ "Cond node", "a00157.html", [
            [ "Enumerations", "a00157.html", [
              [ "cond_jmp_predicate", "a00157.html#ga97d998c139833b7a959e43175b505cf4", null ],
              [ "n_Cond", "a00157.html#gab52e1b321ce417f102484f212222e979", null ],
              [ "pn_Cond", "a00157.html#gaa436e06f4ae0fd7eac339bc07c5f0b64", null ]
            ] ],
            [ "Functions", "a00157.html", [
              [ "get_Cond_jmp_pred", "a00157.html#ga6fe1dd010c68a32264f07e01ffd51250", null ],
              [ "get_Cond_selector", "a00157.html#ga8fd694be3e814190478186f0d24d731c", null ],
              [ "get_op_Cond", "a00157.html#gadaafa5c61d8717ae37cf8e55e84fbdb5", null ],
              [ "is_Cond", "a00157.html#ga16cb738478743d19bcbe1195867e182c", null ],
              [ "new_Cond", "a00157.html#ga1b2e44279dcc2f6b2338e2ad717904d9", null ],
              [ "new_d_Cond", "a00157.html#ga660bd2381593e247bbed863add699d9f", null ],
              [ "new_r_Cond", "a00157.html#ga7b91170cd6ae07d2f2c6171ba2b9603b", null ],
              [ "new_rd_Cond", "a00157.html#ga1903ca92828fe464d2a35c657dbe87ee", null ],
              [ "set_Cond_jmp_pred", "a00157.html#gabbb46be88363ea946fcbb6452b225b4e", null ],
              [ "set_Cond_selector", "a00157.html#ga092c526074ad59836e18055df4acc88a", null ]
            ] ],
            [ "Variables", "a00157.html", [
              [ "op_Cond", "a00157.html#gac3cd59233c6617065b59bc5bfcd826fb", null ]
            ] ]
          ] ],
          [ "Confirm node", "a00158.html", [
            [ "Enumerations", "a00158.html", [
              [ "n_Confirm", "a00158.html#ga4d772b01c04d06e1924225e52aac3257", null ]
            ] ],
            [ "Functions", "a00158.html", [
              [ "get_Confirm_bound", "a00158.html#gaf45c671bffe6c82835ddb73d968a7438", null ],
              [ "get_Confirm_relation", "a00158.html#ga3161d46447e228c7d482d0a6dd8b7f5b", null ],
              [ "get_Confirm_value", "a00158.html#ga6862f20390467d91a3642ed435a89da3", null ],
              [ "get_op_Confirm", "a00158.html#gafb0dd18702a1a5a0d045909bbd7bee1e", null ],
              [ "is_Confirm", "a00158.html#gaa732248748ab4c1fa3da021cf785525d", null ],
              [ "new_Confirm", "a00158.html#gabfbfc38bc00e378f8a4e20bcba84c4a8", null ],
              [ "new_d_Confirm", "a00158.html#ga6a4b1a1391254437ed3d814ac07a09e8", null ],
              [ "new_r_Confirm", "a00158.html#ga479d4855bdbb29d6f61f2390c282028e", null ],
              [ "new_rd_Confirm", "a00158.html#gaef10a0b872cbb8cf97682d7bf97907e3", null ],
              [ "set_Confirm_bound", "a00158.html#gafbd0e0ecbd4a1ca5adad48df6c012409", null ],
              [ "set_Confirm_relation", "a00158.html#ga900a5cb48f301baccc4a33293fc4f884", null ],
              [ "set_Confirm_value", "a00158.html#gad5c6383e2f4994214f7459d1d9e0c971", null ]
            ] ],
            [ "Variables", "a00158.html", [
              [ "op_Confirm", "a00158.html#ga2cacb5d4b90b1da8665bed8d7e101462", null ]
            ] ]
          ] ],
          [ "Const node", "a00159.html", [
            [ "Functions", "a00159.html", [
              [ "get_Const_tarval", "a00159.html#ga069f73b8d2f276f06b28cec7d35a296e", null ],
              [ "get_op_Const", "a00159.html#ga400512cf9cb34f937b5fe809e5cdd147", null ],
              [ "is_Const", "a00159.html#gae9359531cbe749366a5d8d7b259ff2d0", null ],
              [ "is_Const_all_one", "a00159.html#gab7929c122caa883327b57e9523c73f3b", null ],
              [ "is_Const_null", "a00159.html#ga8f57b5d3d46b30230fba4821409b35db", null ],
              [ "is_Const_one", "a00159.html#ga906ecaf76c47a7221f606b6fcc50f76a", null ],
              [ "new_Const", "a00159.html#ga25ae8dcba79f60d22c2805cde64b4162", null ],
              [ "new_Const_long", "a00159.html#gab7ac263ddbe59727ab39efc495f676ba", null ],
              [ "new_d_Const", "a00159.html#ga2bf1d2a4acca213a4f8eee4d76e63eb5", null ],
              [ "new_d_Const_long", "a00159.html#ga5478fb304a6bc9ab2e7bbf89be935cd2", null ],
              [ "new_r_Const", "a00159.html#gafce2e89079171d038423486133d8abb2", null ],
              [ "new_r_Const_long", "a00159.html#ga182a4cb912016d65ebf942e9b6b4ac0d", null ],
              [ "new_rd_Const", "a00159.html#ga2298c861a79ae505f3ca07742501328b", null ],
              [ "new_rd_Const_long", "a00159.html#ga591028d47f73f717e79f96b2be0977e4", null ],
              [ "set_Const_tarval", "a00159.html#ga52fb8e1ad5907b3c7495676d9e785a33", null ]
            ] ],
            [ "Variables", "a00159.html", [
              [ "op_Const", "a00159.html#gafd70950796517a53801a44e81d012d71", null ]
            ] ]
          ] ],
          [ "Conv node", "a00160.html", [
            [ "Enumerations", "a00160.html", [
              [ "n_Conv", "a00160.html#gadff081dc3ea43169d91a9f1276b92876", null ]
            ] ],
            [ "Functions", "a00160.html", [
              [ "get_Conv_op", "a00160.html#gaa28f99318b2863c09524646f053bbfd5", null ],
              [ "get_Conv_strict", "a00160.html#ga657f4f6f560b5e34ec2cf846300716e4", null ],
              [ "get_op_Conv", "a00160.html#gaa3836304744cd72adf4dade2d2210227", null ],
              [ "is_Conv", "a00160.html#ga0aee4f834f88d31aacf0ab745dcb6514", null ],
              [ "is_strictConv", "a00160.html#gaa9163c781253ba31d29125d6185bd69f", null ],
              [ "new_Conv", "a00160.html#gaf7bc0ab5aa79c9987cc2efce8315cad5", null ],
              [ "new_d_Conv", "a00160.html#ga4ed4763b57f28f7f97cb76a4f55134a4", null ],
              [ "new_d_strictConv", "a00160.html#ga5a64cf409212ac94d0a203d6e87724f1", null ],
              [ "new_r_Conv", "a00160.html#ga995f219ec327f61c9c9e42fd2f03b677", null ],
              [ "new_r_strictConv", "a00160.html#ga0b3cc0e77494f42d32fcc15a6191a58a", null ],
              [ "new_rd_Conv", "a00160.html#ga9c057cbea5814cdc780fd3bf3feb73c7", null ],
              [ "new_rd_strictConv", "a00160.html#ga296c66d629307105c2c9a1ef45996b35", null ],
              [ "new_strictConv", "a00160.html#gaee861467c3e66a014664576697862eb8", null ],
              [ "set_Conv_op", "a00160.html#gadecb71e39afb0fee820949dae835a504", null ],
              [ "set_Conv_strict", "a00160.html#ga758f1d08d6d78711c27b27bbb5b38345", null ]
            ] ],
            [ "Variables", "a00160.html", [
              [ "op_Conv", "a00160.html#gadba2b8bac23bf5bba878080284ae2d51", null ]
            ] ]
          ] ],
          [ "CopyB node", "a00161.html", [
            [ "Enumerations", "a00161.html", [
              [ "n_CopyB", "a00161.html#ga0232a973dbb21c6e38c14c4ae27697bf", null ],
              [ "pn_CopyB", "a00161.html#ga88d913afaff3c93423282270d86c1bef", null ]
            ] ],
            [ "Functions", "a00161.html", [
              [ "get_CopyB_dst", "a00161.html#ga35ebf913dd51256ea00656640cd0400e", null ],
              [ "get_CopyB_mem", "a00161.html#gaa5eda729a6a65b864ba4fc7c9ba8e0cb", null ],
              [ "get_CopyB_src", "a00161.html#gaadc40d1abbb601b425ce61a2e5cb3c40", null ],
              [ "get_CopyB_type", "a00161.html#ga0cceb923c53f886d2f0ca5d9822b59f1", null ],
              [ "get_op_CopyB", "a00161.html#ga1200281ddff48679348c793f14b1536f", null ],
              [ "is_CopyB", "a00161.html#ga673112c0bf9681ab79a34f72dd837434", null ],
              [ "new_CopyB", "a00161.html#ga5e8e06d16462e3279927a36a9ada0952", null ],
              [ "new_d_CopyB", "a00161.html#ga6a2e4f1bd2c27c18ca04194b59403cd5", null ],
              [ "new_r_CopyB", "a00161.html#gaaaba105cf7eb80b547158e3426c1b8d3", null ],
              [ "new_rd_CopyB", "a00161.html#ga5735843b31162faa19f6c7f956fd445d", null ],
              [ "set_CopyB_dst", "a00161.html#ga541d3512617292d28309fe7c1dac718c", null ],
              [ "set_CopyB_mem", "a00161.html#ga0a9345ccd49faba4bc9d246e5bc0468c", null ],
              [ "set_CopyB_src", "a00161.html#gaf585b225ce06d3ba9e7a582f866b2e42", null ],
              [ "set_CopyB_type", "a00161.html#gab10b5229068f6812fa56802e9d53f53c", null ]
            ] ],
            [ "Variables", "a00161.html", [
              [ "op_CopyB", "a00161.html#ga0c030707f35cfb5b0332698a565cd187", null ]
            ] ]
          ] ],
          [ "Deleted node", "a00162.html", [
            [ "Functions", "a00162.html", [
              [ "get_op_Deleted", "a00162.html#ga569884f525a6f45ffd8588eb1ad9e630", null ],
              [ "is_Deleted", "a00162.html#ga083ff8d0ebfebb36bf1248cf69c4f53f", null ]
            ] ],
            [ "Variables", "a00162.html", [
              [ "op_Deleted", "a00162.html#ga2fbc0c432302c07f9786ce77c8a61e75", null ]
            ] ]
          ] ],
          [ "Div node", "a00163.html", [
            [ "Enumerations", "a00163.html", [
              [ "n_Div", "a00163.html#ga03109bfaa762d06bdd7b074c7febaf83", null ],
              [ "pn_Div", "a00163.html#gaa2e3ec93cb75c54aebb98faf217f10a3", null ]
            ] ],
            [ "Functions", "a00163.html", [
              [ "get_Div_left", "a00163.html#ga9efa2bdabdf4f6ab7091ef4d61026095", null ],
              [ "get_Div_mem", "a00163.html#ga2888f0b27a0295f54477eeed0593cca3", null ],
              [ "get_Div_no_remainder", "a00163.html#ga0d2f2d99c1846569be853a0a83ca900a", null ],
              [ "get_Div_resmode", "a00163.html#ga0dfba1b515409c29ddd636b94993f774", null ],
              [ "get_Div_right", "a00163.html#ga752859fe9dd035b9410248fe8e98927f", null ],
              [ "get_op_Div", "a00163.html#ga50a9740ba54b6f14cfc7cc6c073d9623", null ],
              [ "is_Div", "a00163.html#ga9fc90594e382e4d6666e6c4109995392", null ],
              [ "new_d_Div", "a00163.html#gadaba11e9cb3edd396a3a68d3bda1c044", null ],
              [ "new_d_DivRL", "a00163.html#ga0f212092a11589fa2596aedb28cec3b3", null ],
              [ "new_Div", "a00163.html#gaf58216f73d2e539a31035f59c5789d97", null ],
              [ "new_DivRL", "a00163.html#ga293c042e2069912f45d6a657299e76a2", null ],
              [ "new_r_Div", "a00163.html#ga1685660d9b8f88b70035e2f81b2a95df", null ],
              [ "new_r_DivRL", "a00163.html#gaae2e5aac9f553cc77a2e31664dbe6005", null ],
              [ "new_rd_Div", "a00163.html#gacb1dc9051bba8661f40a4d8ec98c0162", null ],
              [ "new_rd_DivRL", "a00163.html#ga585eda18283475a136b6c81cb8af45ff", null ],
              [ "set_Div_left", "a00163.html#ga7e5df0e36d68bfc1ac7c07bc61020901", null ],
              [ "set_Div_mem", "a00163.html#ga165e7bffef8c6a3e5e2296e7940c4e6b", null ],
              [ "set_Div_no_remainder", "a00163.html#ga7fa94f7c806728890c30a63edede5a15", null ],
              [ "set_Div_resmode", "a00163.html#ga7a62476bb03f13e59e3a2c167e41fb7a", null ],
              [ "set_Div_right", "a00163.html#gadd7ec89a48adc8772c70703a60cb7f98", null ]
            ] ],
            [ "Variables", "a00163.html", [
              [ "op_Div", "a00163.html#gadb0378e8635a971defc238782aed6eeb", null ]
            ] ]
          ] ],
          [ "Dummy node", "a00164.html", [
            [ "Functions", "a00164.html", [
              [ "get_op_Dummy", "a00164.html#ga6616c2dc792db8359784e00ce8c278dc", null ],
              [ "is_Dummy", "a00164.html#ga25ad87d4b6c760fd7fdd8542f354cd19", null ],
              [ "new_d_Dummy", "a00164.html#ga7a6c5a01e63c313a6d64b749c2e24cb1", null ],
              [ "new_Dummy", "a00164.html#ga4b7f940674a590d7b0f1ae863fb89c90", null ],
              [ "new_r_Dummy", "a00164.html#gac904a3cd52478df7f8c01b0ce500d007", null ],
              [ "new_rd_Dummy", "a00164.html#gafc1d5e41385c9344c0f58208a3c147b8", null ]
            ] ],
            [ "Variables", "a00164.html", [
              [ "op_Dummy", "a00164.html#ga41c2dc76e934748c97e7487aa168b874", null ]
            ] ]
          ] ],
          [ "End node", "a00165.html", [
            [ "Functions", "a00165.html", [
              [ "add_End_keepalive", "a00165.html#ga004a160c6aad3a9e427529716118b715", null ],
              [ "free_End", "a00165.html#ga18585b2249cbdc2658914910ebae84d2", null ],
              [ "get_End_keepalive", "a00165.html#gaf43c4341189b6383ce9adcda3f768598", null ],
              [ "get_End_n_keepalives", "a00165.html#gad274f0545bf108e7693abd5624f65f47", null ],
              [ "get_op_End", "a00165.html#ga35ea062d56f7414bc7e27da71f970f8a", null ],
              [ "is_End", "a00165.html#ga42cb941cef2f2257591b6d817bc26386", null ],
              [ "new_d_End", "a00165.html#ga12ff62fc0b0cdeba976a933556df6071", null ],
              [ "new_End", "a00165.html#ga628deb1f4e623bd3e7aa894d067fe213", null ],
              [ "new_r_End", "a00165.html#gacc3d66ae0168c07d1344f815c0708fb7", null ],
              [ "new_rd_End", "a00165.html#ga3501836306a4c44919d13a0777065a83", null ],
              [ "remove_End_Bads_and_doublets", "a00165.html#gaeac8d23dceab16e054c92f683b526681", null ],
              [ "remove_End_keepalive", "a00165.html#ga9cbef846d2a6b928d5734ce05fce4ac6", null ],
              [ "set_End_keepalive", "a00165.html#ga8710e65d3349bfe03d617a93e4658690", null ],
              [ "set_End_keepalives", "a00165.html#gaf09a3aeb001f249507a7719b4883580e", null ]
            ] ],
            [ "Variables", "a00165.html", [
              [ "op_End", "a00165.html#ga07761ff3e048ae1f6e71ddda1a6254cd", null ]
            ] ]
          ] ],
          [ "Eor node", "a00166.html", [
            [ "Enumerations", "a00166.html", [
              [ "n_Eor", "a00166.html#ga9ab4ee0b84cb20d2c8cf6c0ed5e8316f", null ]
            ] ],
            [ "Functions", "a00166.html", [
              [ "get_Eor_left", "a00166.html#ga083c378ea84f814f95406618e8cdbc26", null ],
              [ "get_Eor_right", "a00166.html#ga41e1d7b27afe13ac665442c18ab625c0", null ],
              [ "get_op_Eor", "a00166.html#gaacde5b6bde5022e93a828374f0ff2f2a", null ],
              [ "is_Eor", "a00166.html#ga7030229b6949c60e9372785dee5794ba", null ],
              [ "new_d_Eor", "a00166.html#ga4f99700256cdb99f7f186b652414e12c", null ],
              [ "new_Eor", "a00166.html#ga811c935e5eb6190aabc93c872ceb6786", null ],
              [ "new_r_Eor", "a00166.html#gac5e106fb97855c738e58ccfff5058e8d", null ],
              [ "new_rd_Eor", "a00166.html#ga1fe237c4e184d9ca4f0138adc3eecdb6", null ],
              [ "set_Eor_left", "a00166.html#gae98a1c231deaeaece45402765b35d558", null ],
              [ "set_Eor_right", "a00166.html#gaebd9f54b3c08c7bd3c723398adfb200e", null ]
            ] ],
            [ "Variables", "a00166.html", [
              [ "op_Eor", "a00166.html#ga1ae5b51a87e58fd7dd0898fe942ba1cd", null ]
            ] ]
          ] ],
          [ "Free node", "a00167.html", [
            [ "Enumerations", "a00167.html", [
              [ "n_Free", "a00167.html#ga398ca5a683c6a2509e4cc8b6ed586dab", null ]
            ] ],
            [ "Functions", "a00167.html", [
              [ "get_Free_count", "a00167.html#ga0e22e9951459fc22a48298eb6d38d036", null ],
              [ "get_Free_mem", "a00167.html#ga266ea4b5fe7a513437a857b977f880e5", null ],
              [ "get_Free_ptr", "a00167.html#ga473302e0d83f0ba1bde91f69d570beec", null ],
              [ "get_Free_type", "a00167.html#ga786e9fc32ace51cbd2be7728fd13f0ad", null ],
              [ "get_Free_where", "a00167.html#ga38c795ff7116877bac0b8fdd8aea1929", null ],
              [ "get_op_Free", "a00167.html#gae49858d865b6a56a98e09d7afe7cdd08", null ],
              [ "is_Free", "a00167.html#ga2c80f5a7ad70650019a295d4171b39e9", null ],
              [ "new_d_Free", "a00167.html#ga11ccdc60c96d55122b878cc6fc264dba", null ],
              [ "new_Free", "a00167.html#gac24096909a1304da228eb6ec7d102259", null ],
              [ "new_r_Free", "a00167.html#ga368bfeaef3b62255e984778eb03ba913", null ],
              [ "new_rd_Free", "a00167.html#gada871766717afa5da856b4a8f8f3d294", null ],
              [ "set_Free_count", "a00167.html#ga67c50c4017772619b692aab717dae7a0", null ],
              [ "set_Free_mem", "a00167.html#gabef401ebb363907c65f8a9224eba7ba3", null ],
              [ "set_Free_ptr", "a00167.html#ga220d17e6355b979d6c0c964439f3b32d", null ],
              [ "set_Free_type", "a00167.html#ga398783c21fe3901cad5bffe187b53e19", null ],
              [ "set_Free_where", "a00167.html#gad57e7e5c499414e6809d28a6966fd188", null ]
            ] ],
            [ "Variables", "a00167.html", [
              [ "op_Free", "a00167.html#ga406a081b3e489de4614ba37f52be36c9", null ]
            ] ]
          ] ],
          [ "IJmp node", "a00168.html", [
            [ "Enumerations", "a00168.html", [
              [ "n_IJmp", "a00168.html#ga7c1e4afca0c99eb92c9c5894f8c1feb8", null ]
            ] ],
            [ "Functions", "a00168.html", [
              [ "get_IJmp_target", "a00168.html#gabc7526b1dc30e84455a405560e9fd042", null ],
              [ "get_op_IJmp", "a00168.html#ga12244beb9d65e52709fec830722fc037", null ],
              [ "is_IJmp", "a00168.html#ga1048952486b72479e48f6398b555bb7d", null ],
              [ "new_d_IJmp", "a00168.html#ga47d8bbf7b18b5281dc6100123674c8f8", null ],
              [ "new_IJmp", "a00168.html#ga05a32e381465649dd6f2871caf0767ec", null ],
              [ "new_r_IJmp", "a00168.html#ga72476a70cfbe55d81dbf239322c8671f", null ],
              [ "new_rd_IJmp", "a00168.html#ga70884d20ebcdb23e762d76a3386e9cc0", null ],
              [ "set_IJmp_target", "a00168.html#ga332d2f3055362101898eaef382887ec5", null ]
            ] ],
            [ "Variables", "a00168.html", [
              [ "op_IJmp", "a00168.html#ga2ad2fb323a838c33600cc434ece26025", null ]
            ] ]
          ] ],
          [ "Id node", "a00169.html", [
            [ "Enumerations", "a00169.html", [
              [ "n_Id", "a00169.html#gac67a759a31b4daadd49985c678fffe0c", null ]
            ] ],
            [ "Functions", "a00169.html", [
              [ "get_Id_pred", "a00169.html#ga9ec1044de1a65dff0533b9946bd3f384", null ],
              [ "get_op_Id", "a00169.html#gadfc2ba1f02757503ee78df9b7c977a4e", null ],
              [ "is_Id", "a00169.html#ga9a7b2a2b406763ae2f598e2120c78912", null ],
              [ "new_d_Id", "a00169.html#gadc4fd3b3b681454f7d94a01f75404f52", null ],
              [ "new_Id", "a00169.html#ga84ac9f5f8769be3ba971e744086f6cfb", null ],
              [ "new_r_Id", "a00169.html#gabe6d906b3e70ce28912e5137b0a43d0b", null ],
              [ "new_rd_Id", "a00169.html#ga49d9a03f69d3cfe2dcfb977ead7efd94", null ],
              [ "set_Id_pred", "a00169.html#ga05c747278d6674190015338cb7c70868", null ]
            ] ],
            [ "Variables", "a00169.html", [
              [ "op_Id", "a00169.html#gafbca870b1a9f23311178442e2e76990e", null ]
            ] ]
          ] ],
          [ "InstOf node", "a00170.html", [
            [ "Enumerations", "a00170.html", [
              [ "n_InstOf", "a00170.html#gaa56379be909b250e900de108119aaa8c", null ],
              [ "pn_InstOf", "a00170.html#gae4fa8f1d70fd61798bfad7a4a2771eea", null ]
            ] ],
            [ "Functions", "a00170.html", [
              [ "get_InstOf_obj", "a00170.html#gac23c4ea375c66fca512262dbf5a22fe5", null ],
              [ "get_InstOf_store", "a00170.html#ga68e8449c980a695665273930203d3c1c", null ],
              [ "get_InstOf_type", "a00170.html#gac39d6255c4866979cb2d3df58bdf088b", null ],
              [ "get_op_InstOf", "a00170.html#ga74e872315e9f3c7971f7d9a76b36b001", null ],
              [ "is_InstOf", "a00170.html#ga467affc80ca120a56c0d92dc2d2d680b", null ],
              [ "new_d_InstOf", "a00170.html#ga5fca986bf9baaa43090ef47c3f89d4c9", null ],
              [ "new_InstOf", "a00170.html#ga75e66a00631f1cfa0ccf2a8833b1ca45", null ],
              [ "new_r_InstOf", "a00170.html#gafcfff8332e2d37ff9921d43fd912f95d", null ],
              [ "new_rd_InstOf", "a00170.html#gad5f9b87dd992625da7c0aba35eed2bf9", null ],
              [ "set_InstOf_obj", "a00170.html#ga6dfda7deca7ae75c232f6ca8f0dbe5ed", null ],
              [ "set_InstOf_store", "a00170.html#ga7552f757c97052595771b24079da7a16", null ],
              [ "set_InstOf_type", "a00170.html#ga36471a005b8affada6256c9fa4355b79", null ]
            ] ],
            [ "Variables", "a00170.html", [
              [ "op_InstOf", "a00170.html#ga159da5189b43bc34f29a4c6daebdcaaf", null ]
            ] ]
          ] ],
          [ "Jmp node", "a00171.html", [
            [ "Functions", "a00171.html", [
              [ "get_op_Jmp", "a00171.html#ga0063f014c5c5f5044adf492fa8d9469c", null ],
              [ "is_Jmp", "a00171.html#ga8380e524fdb3d8918bba4c987f47ac59", null ],
              [ "new_d_Jmp", "a00171.html#gace7e2bd2896ac194f005e85187002766", null ],
              [ "new_Jmp", "a00171.html#ga39f6393083a607d021b7c58c8e52593a", null ],
              [ "new_r_Jmp", "a00171.html#ga95e344163e98a23b52b695b1767da049", null ],
              [ "new_rd_Jmp", "a00171.html#ga73f800669e16448439510546f0effb7c", null ]
            ] ],
            [ "Variables", "a00171.html", [
              [ "op_Jmp", "a00171.html#gada8dddc4d770816f81a894cfa31045c7", null ]
            ] ]
          ] ],
          [ "Load node", "a00172.html", [
            [ "Enumerations", "a00172.html", [
              [ "n_Load", "a00172.html#ga8e8210ff96add40187eae22b9010ffee", null ],
              [ "pn_Load", "a00172.html#ga4b38aced20f4c8492665fd44e8f43d69", null ]
            ] ],
            [ "Functions", "a00172.html", [
              [ "get_Load_mem", "a00172.html#ga0a6c066077796b7455347062e20f66ee", null ],
              [ "get_Load_mode", "a00172.html#gabc3c85da943bf4274803e5fd7480bcbb", null ],
              [ "get_Load_ptr", "a00172.html#gae87b3c287b1a80e96aa06cc90c82e584", null ],
              [ "get_Load_unaligned", "a00172.html#ga62e7839138315149916de37cee253a40", null ],
              [ "get_Load_volatility", "a00172.html#gad18959e167fe2862d8f7113a2f68ce46", null ],
              [ "get_op_Load", "a00172.html#gacbc2e69011f10b5b6379ea9c000e0a52", null ],
              [ "is_Load", "a00172.html#gaf80ab629340bc0bbe650baa509ca234f", null ],
              [ "new_d_Load", "a00172.html#gaeb870fe7c7649528ba561d6d6a72d09e", null ],
              [ "new_Load", "a00172.html#ga40de253bd47693250ee7c725d4d64565", null ],
              [ "new_r_Load", "a00172.html#gac822072f0ac76587db1f81543dfd44f8", null ],
              [ "new_rd_Load", "a00172.html#gaef11ef724871538632ede916da894b60", null ],
              [ "set_Load_mem", "a00172.html#gaf96436b4f63476a86be98499c97f473e", null ],
              [ "set_Load_mode", "a00172.html#ga7f13e4ba8c6b7acf9d7d29f602c582b6", null ],
              [ "set_Load_ptr", "a00172.html#gafb0c96a3112a7d7b825db478e1ea046e", null ],
              [ "set_Load_unaligned", "a00172.html#gae531ce97deb6e626f200ba6a665113b7", null ],
              [ "set_Load_volatility", "a00172.html#gabc4fbd6548e0986aa6f8626f94425ae3", null ]
            ] ],
            [ "Variables", "a00172.html", [
              [ "op_Load", "a00172.html#ga645b48c92d58e4824e40750b4c698567", null ]
            ] ]
          ] ],
          [ "Minus node", "a00173.html", [
            [ "Enumerations", "a00173.html", [
              [ "n_Minus", "a00173.html#ga6836560bcdcaa1e51cadc5ea5974b2b7", null ]
            ] ],
            [ "Functions", "a00173.html", [
              [ "get_Minus_op", "a00173.html#gab5c70eb89de2e027b4c54d4b138b6809", null ],
              [ "get_op_Minus", "a00173.html#ga46e8ebb3b93c38bafc98b266239c57fd", null ],
              [ "is_Minus", "a00173.html#ga7b6dbc99fb6afef7d956eee7b1103e91", null ],
              [ "new_d_Minus", "a00173.html#gad2b520d1eecbf96024be4ec828babfc5", null ],
              [ "new_Minus", "a00173.html#ga4681e8d0f939fbad9715d20bd810e393", null ],
              [ "new_r_Minus", "a00173.html#gaf1122dc2e778492b500548690f9332f8", null ],
              [ "new_rd_Minus", "a00173.html#ga244a6fdc5c89632fef7f00f0c9d02ca9", null ],
              [ "set_Minus_op", "a00173.html#ga4e6471e6c734f9cb1c3f7de99a219a20", null ]
            ] ],
            [ "Variables", "a00173.html", [
              [ "op_Minus", "a00173.html#ga4a8c0c7bb68a2ac84df9a9a0d2cfde2b", null ]
            ] ]
          ] ],
          [ "Mod node", "a00174.html", [
            [ "Enumerations", "a00174.html", [
              [ "n_Mod", "a00174.html#gaafb5d7555770705bea43896ff565335f", null ],
              [ "pn_Mod", "a00174.html#ga887b428691854d5b86ffcb98ef365bd6", null ]
            ] ],
            [ "Functions", "a00174.html", [
              [ "get_Mod_left", "a00174.html#ga42ebc63816fcd7460121f39be9f10497", null ],
              [ "get_Mod_mem", "a00174.html#gacefe21176e614018cbec47c974d639ed", null ],
              [ "get_Mod_resmode", "a00174.html#gae8476e3cd299f3684ec9c495565608a9", null ],
              [ "get_Mod_right", "a00174.html#gabfb18db3433f1bd4d4389bd3a243f10d", null ],
              [ "get_op_Mod", "a00174.html#ga9f48e5f8cd3d46b4efdbb4bee596dcae", null ],
              [ "is_Mod", "a00174.html#ga8170a3c00c8b121dca8753d69304f502", null ],
              [ "new_d_Mod", "a00174.html#ga8b44c7f953dcfa3e558df48111b61f9b", null ],
              [ "new_Mod", "a00174.html#gaabe523afb71fcbd9aa72f0a5991f0d5f", null ],
              [ "new_r_Mod", "a00174.html#ga6544c53fe78b86317b526d2f8b666cfa", null ],
              [ "new_rd_Mod", "a00174.html#gad7c40b547e2ead88bcb70c8f2bd1b8f4", null ],
              [ "set_Mod_left", "a00174.html#gad40f38690bf5b54ed92f72530baba3f4", null ],
              [ "set_Mod_mem", "a00174.html#gab375abe903b6d6d1d86ee17a1b8d256c", null ],
              [ "set_Mod_resmode", "a00174.html#gaa97903de70c8ae736d49fd032f0dfee1", null ],
              [ "set_Mod_right", "a00174.html#gac10c6830da01e64ac0a4b4c1ba578d99", null ]
            ] ],
            [ "Variables", "a00174.html", [
              [ "op_Mod", "a00174.html#gad6082e484c008e196a7198ba04719932", null ]
            ] ]
          ] ],
          [ "Mul node", "a00175.html", [
            [ "Enumerations", "a00175.html", [
              [ "n_Mul", "a00175.html#ga45d554036659acd98d7727d8203ba0fe", null ]
            ] ],
            [ "Functions", "a00175.html", [
              [ "get_Mul_left", "a00175.html#gac4f04f21ca29c27cf673ebad6e9dcfd2", null ],
              [ "get_Mul_right", "a00175.html#ga332adf4de914a2c802ebad753a934753", null ],
              [ "get_op_Mul", "a00175.html#gabc129554e91256824b8726214048ce88", null ],
              [ "is_Mul", "a00175.html#ga50d3a6a86e68eb2a4537ac83a4d11b33", null ],
              [ "new_d_Mul", "a00175.html#ga2f87b7bcc2f68e203c3c5ec4a960467a", null ],
              [ "new_Mul", "a00175.html#ga549a8c483f0418fe7cc20aea53451fe6", null ],
              [ "new_r_Mul", "a00175.html#ga170a50e680ab2a5df9903ef27b9cde82", null ],
              [ "new_rd_Mul", "a00175.html#gaed5476b8c4c3f5568203b8fbab1c4e29", null ],
              [ "set_Mul_left", "a00175.html#ga01204ff589528b00034e8602f3ff8f43", null ],
              [ "set_Mul_right", "a00175.html#gaf6be88739d3d8db541fb5d3c755db4d6", null ]
            ] ],
            [ "Variables", "a00175.html", [
              [ "op_Mul", "a00175.html#ga827b2843c97b50ba184ee456d3da0739", null ]
            ] ]
          ] ],
          [ "Mulh node", "a00176.html", [
            [ "Enumerations", "a00176.html", [
              [ "n_Mulh", "a00176.html#ga18e1792ac5f94b4efd51425ed3ab4880", null ]
            ] ],
            [ "Functions", "a00176.html", [
              [ "get_Mulh_left", "a00176.html#ga4728bb79dbcc75174131255fb4b57046", null ],
              [ "get_Mulh_right", "a00176.html#ga1bd86f1c0120bb21990192ba16217892", null ],
              [ "get_op_Mulh", "a00176.html#ga997ca072795ce99d2a8a040352351781", null ],
              [ "is_Mulh", "a00176.html#gac55473fb3e9f8e080b9810b3b9422600", null ],
              [ "new_d_Mulh", "a00176.html#ga8ea929bdc20f72fa868c3ab2876f8e1c", null ],
              [ "new_Mulh", "a00176.html#gaef36e47bf2b57f2afae36f98e0240caa", null ],
              [ "new_r_Mulh", "a00176.html#ga355a67e098dd7e04ad95af0157fc0156", null ],
              [ "new_rd_Mulh", "a00176.html#ga4a2f428360a9d74e5c3d7291dbd7a0e5", null ],
              [ "set_Mulh_left", "a00176.html#ga37d1fcadc50cca549550417cfa6ae4cc", null ],
              [ "set_Mulh_right", "a00176.html#ga59c0182358aa476b5cc5061df22fee48", null ]
            ] ],
            [ "Variables", "a00176.html", [
              [ "op_Mulh", "a00176.html#gae1e545a5b849fc0d79a696163aeef73b", null ]
            ] ]
          ] ],
          [ "Mux node", "a00177.html", [
            [ "Enumerations", "a00177.html", [
              [ "n_Mux", "a00177.html#gac2bc45128ddc9519f139520c26da29d9", null ]
            ] ],
            [ "Functions", "a00177.html", [
              [ "get_Mux_false", "a00177.html#ga82a01a0f06b3ba9e8a8b582747712ee4", null ],
              [ "get_Mux_sel", "a00177.html#ga9b70163ce1a073a0a206d8ea37c9a1e4", null ],
              [ "get_Mux_true", "a00177.html#gad2020c7fa7d4305ade9a20801a0e577a", null ],
              [ "get_op_Mux", "a00177.html#ga76b1f4793962d59b14af7bf8c10c1718", null ],
              [ "is_Mux", "a00177.html#ga4d0f4b1a39742a53bf3682b97f845d2c", null ],
              [ "new_d_Mux", "a00177.html#ga5aebe2643d5c031b521df5660e79054d", null ],
              [ "new_Mux", "a00177.html#ga8bc43507c611dd08bdcd35df37d49105", null ],
              [ "new_r_Mux", "a00177.html#gad61b4b499f69e94dc941f37630b9ee16", null ],
              [ "new_rd_Mux", "a00177.html#ga627e4423e6e8ef988b44f7a0354a4373", null ],
              [ "set_Mux_false", "a00177.html#ga940c3d4c8aec391d4337479e6c8eb225", null ],
              [ "set_Mux_sel", "a00177.html#gacbd3535b8644d385089979532822283e", null ],
              [ "set_Mux_true", "a00177.html#ga92ea94ce26c44499375e70e85c71a252", null ]
            ] ],
            [ "Variables", "a00177.html", [
              [ "op_Mux", "a00177.html#gaf17a434264743b52971cd6f0980c6ce7", null ]
            ] ]
          ] ],
          [ "NoMem node", "a00178.html", [
            [ "Functions", "a00178.html", [
              [ "get_op_NoMem", "a00178.html#ga26db38d977a7454b7087b0fab073347f", null ],
              [ "is_NoMem", "a00178.html#ga205c0db2a24f537e480733b07bf87aac", null ],
              [ "new_d_NoMem", "a00178.html#ga14f2ec5dea979077a75c28996c07be32", null ],
              [ "new_NoMem", "a00178.html#gaa540293a79ec02c8f67eb960c8b2550b", null ],
              [ "new_r_NoMem", "a00178.html#ga20cf75ac292c45ddf10940e76734df59", null ],
              [ "new_rd_NoMem", "a00178.html#ga5a44614a629f1512a282b44d8db5f102", null ]
            ] ],
            [ "Variables", "a00178.html", [
              [ "op_NoMem", "a00178.html#ga28ca2f56d672aa26eeb0caf894bcf6af", null ]
            ] ]
          ] ],
          [ "Not node", "a00179.html", [
            [ "Enumerations", "a00179.html", [
              [ "n_Not", "a00179.html#ga4cbed00c4d87fd931b7730151fe75d10", null ]
            ] ],
            [ "Functions", "a00179.html", [
              [ "get_Not_op", "a00179.html#ga835300d97fec34e3c75f52716a5d780b", null ],
              [ "get_op_Not", "a00179.html#ga17efc6ecdd354bea33ac088940e66c84", null ],
              [ "is_Not", "a00179.html#gae4394830208d8a9b362412793abeeae0", null ],
              [ "new_d_Not", "a00179.html#gac9182cdb15b7da12c634c6deb15abea2", null ],
              [ "new_Not", "a00179.html#ga8f17f359ed089f61e23787d57e4a5c0c", null ],
              [ "new_r_Not", "a00179.html#ga4db3bf6e70311ae355275f4778cbc96f", null ],
              [ "new_rd_Not", "a00179.html#ga641cc1dff1cf429bb9517717f2a1dccf", null ],
              [ "set_Not_op", "a00179.html#ga8b892f4a64b507c63e8c477ec4a7de3b", null ]
            ] ],
            [ "Variables", "a00179.html", [
              [ "op_Not", "a00179.html#gac89151550d4dae2dc962634bcb0a9ebf", null ]
            ] ]
          ] ],
          [ "Or node", "a00180.html", [
            [ "Enumerations", "a00180.html", [
              [ "n_Or", "a00180.html#ga9468ed649f17b9574cc09f3c81c1734c", null ]
            ] ],
            [ "Functions", "a00180.html", [
              [ "get_op_Or", "a00180.html#ga4c1c6760f705ad7af277ced0a0017116", null ],
              [ "get_Or_left", "a00180.html#ga711de607870298a391d3f4a4f4094726", null ],
              [ "get_Or_right", "a00180.html#ga8006d53f7bdab3aebbb361b1f49d6330", null ],
              [ "is_Or", "a00180.html#ga1b1459d3d7bc51118d46d12b5df58b23", null ],
              [ "new_d_Or", "a00180.html#ga21c321078aa21332409eceb109a6cbb7", null ],
              [ "new_Or", "a00180.html#ga6f2d6d71534091394f88bbc85db0bf97", null ],
              [ "new_r_Or", "a00180.html#ga324a73e10c2e179ca263689100e152af", null ],
              [ "new_rd_Or", "a00180.html#ga04dce67b35ae43b8a5afeead12fc472d", null ],
              [ "set_Or_left", "a00180.html#gac4cab209a90b2f83cb8bcb447ce268a5", null ],
              [ "set_Or_right", "a00180.html#ga370c835093d259368c0f40dec4552e2d", null ]
            ] ],
            [ "Variables", "a00180.html", [
              [ "op_Or", "a00180.html#gadb1d6345a519a65bd7ff68550c5bc72c", null ]
            ] ]
          ] ],
          [ "Phi node", "a00181.html", [
            [ "Functions", "a00181.html", [
              [ "get_op_Phi", "a00181.html#ga19f1af48fc9c4ab1d49c403aa69b0692", null ],
              [ "get_Phi_n_preds", "a00181.html#ga27a0ab60bd646e96f7c4d92dbf5af430", null ],
              [ "get_Phi_next", "a00181.html#ga18b5e4a2bcf34bb421c47dd1d2bbec6a", null ],
              [ "get_Phi_pred", "a00181.html#ga548805e4ad67f35f789a2ea9c5985f52", null ],
              [ "get_Phi_preds_arr", "a00181.html#ga2b71014b7d2e8f24b5921e95ee41d572", null ],
              [ "is_Phi", "a00181.html#gac06e08cdfa4a00cc96b3ffae73c85ef8", null ],
              [ "is_Phi0", "a00181.html#ga41745b65d39826fa5eabbf74e254b1e1", null ],
              [ "new_d_Phi", "a00181.html#gabc46af31b24ce364f61dd15207c6a476", null ],
              [ "new_Phi", "a00181.html#ga8886efa57c171b120a4e2a745eecb0a3", null ],
              [ "new_r_Phi", "a00181.html#gadee406ea197cfbd9f2a33bfaca8d7c82", null ],
              [ "new_rd_Phi", "a00181.html#ga943fbaf5270b5d6c3055ade92248e40a", null ],
              [ "set_Phi_next", "a00181.html#ga265b7261c2480508f5e3b0a49ac17b1a", null ],
              [ "set_Phi_pred", "a00181.html#ga743b8367596f4febcb53f7650baa1a48", null ]
            ] ],
            [ "Variables", "a00181.html", [
              [ "op_Phi", "a00181.html#gaa609955bc36bc72e08a47e3e032dc0a0", null ]
            ] ]
          ] ],
          [ "Pin node", "a00182.html", [
            [ "Enumerations", "a00182.html", [
              [ "n_Pin", "a00182.html#ga5302c414545f89327bc0fd2fd0a18532", null ]
            ] ],
            [ "Functions", "a00182.html", [
              [ "get_op_Pin", "a00182.html#ga5811dd8602fccd7a2286a203a1d66224", null ],
              [ "get_Pin_op", "a00182.html#ga4b0c29424859152073c58f580cdd07ab", null ],
              [ "is_Pin", "a00182.html#ga178064428647b6ef5049ae84a747afb4", null ],
              [ "new_d_Pin", "a00182.html#gaeffcf29e788520388e89a77535e5cc72", null ],
              [ "new_Pin", "a00182.html#ga23fc6dad6c87f20aa9e7cfdaf9f863fb", null ],
              [ "new_r_Pin", "a00182.html#gaa59baec5615682841aa9a8296c314b46", null ],
              [ "new_rd_Pin", "a00182.html#ga54475eba9d90b227f49e56146a96a788", null ],
              [ "set_Pin_op", "a00182.html#gaaf68dcc1c870442c63043c72d1be629b", null ]
            ] ],
            [ "Variables", "a00182.html", [
              [ "op_Pin", "a00182.html#ga896e34dfe91fe3e77aac96a6a1c9f2dc", null ]
            ] ]
          ] ],
          [ "Proj node", "a00183.html", [
            [ "Enumerations", "a00183.html", [
              [ "n_Proj", "a00183.html#gaf9b68127e872be0ecb030cb34fb30536", null ]
            ] ],
            [ "Functions", "a00183.html", [
              [ "get_op_Proj", "a00183.html#ga29a3847b148247ce4fb0516f209b08c3", null ],
              [ "get_Proj_pred", "a00183.html#ga8c78b2976dc505c2b82c2544f7b02a9e", null ],
              [ "get_Proj_proj", "a00183.html#ga24dd5b74323c17e01528e06c8f6feaac", null ],
              [ "is_Proj", "a00183.html#ga3467ad9227d281551fa8ebd0bbe009b4", null ],
              [ "new_d_Proj", "a00183.html#ga0958ebd5edda8462b1b662a973c9ba56", null ],
              [ "new_Proj", "a00183.html#gad2b866110630bdfb006d04e342218810", null ],
              [ "new_r_Proj", "a00183.html#gabc1c3e1c0562efa20c68c0d0aa82fc82", null ],
              [ "new_rd_Proj", "a00183.html#ga86f19cb0aaf0341e21e5a10b16bccd7e", null ],
              [ "set_Proj_pred", "a00183.html#ga72b22f307f2c5ae04696fed015c788c5", null ],
              [ "set_Proj_proj", "a00183.html#gad4e4e9c791abb9a8af7297b5226fd392", null ]
            ] ],
            [ "Variables", "a00183.html", [
              [ "op_Proj", "a00183.html#ga85d61e1fef713a63dcd021d0d03c6a25", null ]
            ] ]
          ] ],
          [ "Raise node", "a00184.html", [
            [ "Enumerations", "a00184.html", [
              [ "n_Raise", "a00184.html#ga4a77f4442356a5e381b0988ec4aa97e9", null ],
              [ "pn_Raise", "a00184.html#ga9ba93a58bc589fa52533faac4d86225f", null ]
            ] ],
            [ "Functions", "a00184.html", [
              [ "get_op_Raise", "a00184.html#ga4838360dcf96f1880149c8cb4e6771da", null ],
              [ "get_Raise_exo_ptr", "a00184.html#gaf498ebdb15aab5662d1a765ddc177c66", null ],
              [ "get_Raise_mem", "a00184.html#gaa9b6bff028dee44095ebd0764266e3b6", null ],
              [ "is_Raise", "a00184.html#ga6acb062f726cac0659637b29ede2e71b", null ],
              [ "new_d_Raise", "a00184.html#gaf71588abaa59c6e7acb622292453eb24", null ],
              [ "new_r_Raise", "a00184.html#gade6cac1f0494983d58a7396ad6753314", null ],
              [ "new_Raise", "a00184.html#ga969ea2af3499911e063efc6d69d23c43", null ],
              [ "new_rd_Raise", "a00184.html#ga45472351c55ebd8c0333ef6e308579ca", null ],
              [ "set_Raise_exo_ptr", "a00184.html#ga90f2cda16800f1a1faa0282b417f715b", null ],
              [ "set_Raise_mem", "a00184.html#gaa7c950fd1bb167b7c48ef5163dd71686", null ]
            ] ],
            [ "Variables", "a00184.html", [
              [ "op_Raise", "a00184.html#ga34aa2a9b40bac06c40cce9ce3ec98714", null ]
            ] ]
          ] ],
          [ "Return node", "a00185.html", [
            [ "Enumerations", "a00185.html", [
              [ "n_Return", "a00185.html#ga34fe83e8cdad388c6e29d72c6af20164", null ]
            ] ],
            [ "Functions", "a00185.html", [
              [ "get_op_Return", "a00185.html#ga31ed3e3b3dfba8f0ac3f5704c9ce6988", null ],
              [ "get_Return_mem", "a00185.html#ga35a88ab27ec031b52f6bc12f8988e551", null ],
              [ "get_Return_n_ress", "a00185.html#gada229d937895aa2662e90f1f82603db1", null ],
              [ "get_Return_res", "a00185.html#gaddcd81190cb06c846911039ae5f263e4", null ],
              [ "get_Return_res_arr", "a00185.html#gac48ae54fe263c84d9d14fd96b3487668", null ],
              [ "is_Return", "a00185.html#ga74b0caf36401eacddd5bdb8574c5667f", null ],
              [ "new_d_Return", "a00185.html#gacc28482349d7a78b4a97d553f418a87b", null ],
              [ "new_r_Return", "a00185.html#gaabfb8a9593e1aa48b257d55ce9418ea2", null ],
              [ "new_rd_Return", "a00185.html#gab34bde162df7fa7125b3c54918cf2b53", null ],
              [ "new_Return", "a00185.html#ga4d8ae6ef9bb1f3bf48230d2f0ce52052", null ],
              [ "set_Return_mem", "a00185.html#ga2d92d03cbd05a5c1e768cf06f5eadbb5", null ],
              [ "set_Return_res", "a00185.html#ga387c1376d57ec31c06bf0e12cc500916", null ]
            ] ],
            [ "Variables", "a00185.html", [
              [ "op_Return", "a00185.html#ga9605f4edea5aeaad99cb67c1c885f7da", null ]
            ] ]
          ] ],
          [ "Rotl node", "a00186.html", [
            [ "Enumerations", "a00186.html", [
              [ "n_Rotl", "a00186.html#ga021f217f4b9b21ec3d5233ba53978bf0", null ]
            ] ],
            [ "Functions", "a00186.html", [
              [ "get_op_Rotl", "a00186.html#ga04e0c94544fbafcc680fc864ea783ccf", null ],
              [ "get_Rotl_left", "a00186.html#ga25dc907af90e7b329901adefe79b7d57", null ],
              [ "get_Rotl_right", "a00186.html#ga44ee7bfbfe04b7bc072ae391719774bb", null ],
              [ "is_Rotl", "a00186.html#gadd53001ce2f52e71beef29322412bf95", null ],
              [ "new_d_Rotl", "a00186.html#ga672f1e9ef7e348cc2bb3e476b5ade7b6", null ],
              [ "new_r_Rotl", "a00186.html#ga7252fa2a30062ff764370b778f9f3e93", null ],
              [ "new_rd_Rotl", "a00186.html#ga0700f57aaae19fe2a7fa7da142f7a867", null ],
              [ "new_Rotl", "a00186.html#ga50ee64f7950116d0a598eea5ee1299c5", null ],
              [ "set_Rotl_left", "a00186.html#ga33c14b78d7e832de8f5e2f4010733187", null ],
              [ "set_Rotl_right", "a00186.html#gaf2e575cddf31bf37244630f90af7614c", null ]
            ] ],
            [ "Variables", "a00186.html", [
              [ "op_Rotl", "a00186.html#ga0064fe8d1c10664b76fc040c03be294e", null ]
            ] ]
          ] ],
          [ "Sel node", "a00187.html", [
            [ "Enumerations", "a00187.html", [
              [ "n_Sel", "a00187.html#ga7706f682e0831fdccbf66daf4ee738ba", null ]
            ] ],
            [ "Functions", "a00187.html", [
              [ "get_op_Sel", "a00187.html#gafb8293fc0ca8e2ed008a6770d5431db8", null ],
              [ "get_Sel_entity", "a00187.html#gaf014ae46d08fec1547e0f97e125b2e67", null ],
              [ "get_Sel_index", "a00187.html#gac29a99a66d2782fcee5af4bf4ff00dc3", null ],
              [ "get_Sel_index_arr", "a00187.html#gac89a9963436d77fd1ffba0b6bc6a8ead", null ],
              [ "get_Sel_mem", "a00187.html#gab765f6f66853e90e4d48d0e567b933dd", null ],
              [ "get_Sel_n_indexs", "a00187.html#gae337c709af8609e5a85490a509f89270", null ],
              [ "get_Sel_ptr", "a00187.html#ga1d8aecc22c6bafba17f75a34f9df2172", null ],
              [ "is_Sel", "a00187.html#ga86cdcf9ea83329b2bd53d659da507ad6", null ],
              [ "new_d_Sel", "a00187.html#ga56741e2dc0103520fc408aa18828c006", null ],
              [ "new_d_simpleSel", "a00187.html#gaf418bb3f8b42f58ac3de19c8a37c41e9", null ],
              [ "new_r_Sel", "a00187.html#ga96d75862f84955dc4f59220a9b5a18e5", null ],
              [ "new_r_simpleSel", "a00187.html#ga2cf206e84deba1582deee0a886b1b67f", null ],
              [ "new_rd_Sel", "a00187.html#gaf280aa307e4cdad8b88d830754200dbd", null ],
              [ "new_rd_simpleSel", "a00187.html#gaa9f15b1a59ccafbf70419b5d6f0fe32b", null ],
              [ "new_Sel", "a00187.html#gabb32c24ee00d1eee08dbdee7aeda2fb2", null ],
              [ "new_simpleSel", "a00187.html#ga028a5ef18a03e33029427d70099d38f8", null ],
              [ "set_Sel_entity", "a00187.html#ga5d6a8999d2828778f6740edaeae5ca1d", null ],
              [ "set_Sel_index", "a00187.html#ga0bcb8a09d7bbde80a0ce5c4e71159c2c", null ],
              [ "set_Sel_mem", "a00187.html#ga761b4818f9958bfbc943373da443b9b8", null ],
              [ "set_Sel_ptr", "a00187.html#ga8b38756c2b5763a1209f7642b268ff82", null ]
            ] ],
            [ "Variables", "a00187.html", [
              [ "op_Sel", "a00187.html#ga10ab15ca8f8bc8309d44bb96e487a338", null ]
            ] ]
          ] ],
          [ "Shl node", "a00188.html", [
            [ "Enumerations", "a00188.html", [
              [ "n_Shl", "a00188.html#gaab0e3f3a110ea78bf32d9141faee1729", null ]
            ] ],
            [ "Functions", "a00188.html", [
              [ "get_op_Shl", "a00188.html#gac9a3a769426dec15338611abd1e1638f", null ],
              [ "get_Shl_left", "a00188.html#ga286dac1a77b6ae1c2cd4610b3da39653", null ],
              [ "get_Shl_right", "a00188.html#ga0af17de4ea27490d2561b7020fd2f783", null ],
              [ "is_Shl", "a00188.html#gab63e5be0f9a0c9c95fa35f8d0df03407", null ],
              [ "new_d_Shl", "a00188.html#ga6f722e16b001f0351c785745080fd96c", null ],
              [ "new_r_Shl", "a00188.html#ga267231cce2ac4c74dd2897aab225f8e6", null ],
              [ "new_rd_Shl", "a00188.html#gaa2c397eb5a7aa94b366aaebbc6a6bfee", null ],
              [ "new_Shl", "a00188.html#ga190238057c72f89b54444bbbf2966312", null ],
              [ "set_Shl_left", "a00188.html#gaba794923f1ef7d5927f36e8461b57967", null ],
              [ "set_Shl_right", "a00188.html#gadfdf4ab06ead0910a9d1104a258d537a", null ]
            ] ],
            [ "Variables", "a00188.html", [
              [ "op_Shl", "a00188.html#ga83151fef7301349fb733f646549fb4a8", null ]
            ] ]
          ] ],
          [ "Shr node", "a00189.html", [
            [ "Enumerations", "a00189.html", [
              [ "n_Shr", "a00189.html#ga38b368b5b4535c4777e411441f017688", null ]
            ] ],
            [ "Functions", "a00189.html", [
              [ "get_op_Shr", "a00189.html#gab1c260a17306bac0d98ecbac7b524673", null ],
              [ "get_Shr_left", "a00189.html#ga7ffe9c35038d53b15c4a8af398b8dbe9", null ],
              [ "get_Shr_right", "a00189.html#ga8790783c5281a02dff38d8fd3312565b", null ],
              [ "is_Shr", "a00189.html#gabe1de00be2d007f582ea9c6112800eb1", null ],
              [ "new_d_Shr", "a00189.html#gaa2261fab0dc0ba822f9779fdee061d5f", null ],
              [ "new_r_Shr", "a00189.html#gabb304cd6dbcf32bdb1d1ea2aea2f0e4c", null ],
              [ "new_rd_Shr", "a00189.html#ga8db428a24057cf595d62ef8e78bd1939", null ],
              [ "new_Shr", "a00189.html#ga9a22220e878a8ba72f3a90680e081636", null ],
              [ "set_Shr_left", "a00189.html#ga2d7bd704d780178053d949ddf5fa4fbc", null ],
              [ "set_Shr_right", "a00189.html#ga2c7dab87966b517d204fa4603d41e5f7", null ]
            ] ],
            [ "Variables", "a00189.html", [
              [ "op_Shr", "a00189.html#ga6bd65c3e063bd46cd0d777a10c231d5c", null ]
            ] ]
          ] ],
          [ "Shrs node", "a00190.html", [
            [ "Enumerations", "a00190.html", [
              [ "n_Shrs", "a00190.html#ga40e69b944cc6edd0ce89c3ca649ee748", null ]
            ] ],
            [ "Functions", "a00190.html", [
              [ "get_op_Shrs", "a00190.html#ga33cbd0724878d52b2acd14552346e779", null ],
              [ "get_Shrs_left", "a00190.html#ga40d6ed24cc6a8654e1ad71f674c5330d", null ],
              [ "get_Shrs_right", "a00190.html#ga2eb914ac76509351e7aefb8c4cd44efb", null ],
              [ "is_Shrs", "a00190.html#gab94ea34df7063a21618b4cc2f0565fb0", null ],
              [ "new_d_Shrs", "a00190.html#ga0f08b4fddd09a8b9027dd131aefd97d5", null ],
              [ "new_r_Shrs", "a00190.html#gad21c5b5256bbd7d78924fdce98e87142", null ],
              [ "new_rd_Shrs", "a00190.html#ga56934efe86883ca3a14b9636ac97a9aa", null ],
              [ "new_Shrs", "a00190.html#gac0e7471467c3f8b5edbca5694e4bdb43", null ],
              [ "set_Shrs_left", "a00190.html#gacff25c0f1c20f03fcee83dc7c4070509", null ],
              [ "set_Shrs_right", "a00190.html#gae55bb00a9d49aa0e0bfb9ed4e8847f86", null ]
            ] ],
            [ "Variables", "a00190.html", [
              [ "op_Shrs", "a00190.html#ga6d10119ba2fafa1a83ff64c9a04971bb", null ]
            ] ]
          ] ],
          [ "Start node", "a00191.html", [
            [ "Enumerations", "a00191.html", [
              [ "pn_Start", "a00191.html#ga99b784610d7eb92afa78a50e127f9721", null ]
            ] ],
            [ "Functions", "a00191.html", [
              [ "get_op_Start", "a00191.html#ga950361a6ee71d6a588a2402b6cc4bac8", null ],
              [ "is_Start", "a00191.html#gafa90b4c2747df82a479c81c57ab3adfb", null ],
              [ "new_d_Start", "a00191.html#ga2a4897ff2a410e3d4cf49967f34a634e", null ],
              [ "new_r_Start", "a00191.html#ga94b46ceab6e413cfb0a018638851f32e", null ],
              [ "new_rd_Start", "a00191.html#ga0550973ca3018cef7700a633d12d77b6", null ],
              [ "new_Start", "a00191.html#ga5f003b586d7d02dbb264a0fb03e60ee2", null ]
            ] ],
            [ "Variables", "a00191.html", [
              [ "op_Start", "a00191.html#ga40458db8642aa7aab0a1776fca0ef391", null ]
            ] ]
          ] ],
          [ "Store node", "a00192.html", [
            [ "Enumerations", "a00192.html", [
              [ "n_Store", "a00192.html#ga01dd147952c44dfbde36fea2afe60910", null ],
              [ "pn_Store", "a00192.html#ga9966a19ed9139fc6c4cdd4d625b33882", null ]
            ] ],
            [ "Functions", "a00192.html", [
              [ "get_op_Store", "a00192.html#gac2af4b07075e4b5d7ac6fe98d3b28ef5", null ],
              [ "get_Store_mem", "a00192.html#ga89a38f707a0f606c7047e316b3d2463b", null ],
              [ "get_Store_ptr", "a00192.html#gabf6a1ac3845ab08dc93c044106738f14", null ],
              [ "get_Store_unaligned", "a00192.html#ga345db1b435c034ff9ecfb28f29b671b8", null ],
              [ "get_Store_value", "a00192.html#gafd13b3c052dadda80f43cfcc0c20f7bb", null ],
              [ "get_Store_volatility", "a00192.html#gab775884e8fcf697e4e787125188d6558", null ],
              [ "is_Store", "a00192.html#gaaed8cac909d7c1be109b85af5c604a6e", null ],
              [ "new_d_Store", "a00192.html#gaff74840f722a86dd2bc5027d7af13afe", null ],
              [ "new_r_Store", "a00192.html#ga7fcbded2ddad035ccb71e4f036799f78", null ],
              [ "new_rd_Store", "a00192.html#ga0b8f62623587f482c3494355c9cac858", null ],
              [ "new_Store", "a00192.html#ga29ab1d0d55a68762687aa107d93422ec", null ],
              [ "set_Store_mem", "a00192.html#ga68edc47e079ad26981e6bdcc18b85a65", null ],
              [ "set_Store_ptr", "a00192.html#gae45eecea1d16435ad3503d9413b96680", null ],
              [ "set_Store_unaligned", "a00192.html#gadd33a4eb453bbd63ce21ee30a10741f3", null ],
              [ "set_Store_value", "a00192.html#ga159d73ebea0504b3ed19ca147991ec3b", null ],
              [ "set_Store_volatility", "a00192.html#ga8bddfb1fb9c745ee2bfce52b7c94f4e4", null ]
            ] ],
            [ "Variables", "a00192.html", [
              [ "op_Store", "a00192.html#ga802c017c20ac2e9e16dcb83bd353870e", null ]
            ] ]
          ] ],
          [ "Sub node", "a00193.html", [
            [ "Enumerations", "a00193.html", [
              [ "n_Sub", "a00193.html#gad9a7c541055b4c950f5db5ce6268f7a8", null ]
            ] ],
            [ "Functions", "a00193.html", [
              [ "get_op_Sub", "a00193.html#gad545772e4fc9d6e2b6834957bfdf1699", null ],
              [ "get_Sub_left", "a00193.html#ga147984d038d9091f1ce12f9fa3c46cfb", null ],
              [ "get_Sub_right", "a00193.html#ga103e67c377b0a97bfddfe357e7d87a73", null ],
              [ "is_Sub", "a00193.html#ga781c0ff1eef922c452fbfafaa9021b47", null ],
              [ "new_d_Sub", "a00193.html#gac255d1f42eca047b765b6a49468a4b68", null ],
              [ "new_r_Sub", "a00193.html#gab0387f6b7d36656e2d918a2cebdcdec3", null ],
              [ "new_rd_Sub", "a00193.html#ga9e0d5d2992c715fa0428e2bcdc206171", null ],
              [ "new_Sub", "a00193.html#ga8200b43d37526d8d87abd7968e36cf84", null ],
              [ "set_Sub_left", "a00193.html#gac2df2bc65e0c543579bcd5899aac200b", null ],
              [ "set_Sub_right", "a00193.html#ga1bb482560ed3e29588b3130ae42b56a0", null ]
            ] ],
            [ "Variables", "a00193.html", [
              [ "op_Sub", "a00193.html#gacf0d69276a5fe50413afa6ba31cdc065", null ]
            ] ]
          ] ],
          [ "Switch node", "a00194.html", [
            [ "Typedefs", "a00194.html", [
              [ "ir_switch_table", "a00194.html#gacdb4d7eeb590b7e0aafc5d72dafd3d15", null ]
            ] ],
            [ "Enumerations", "a00194.html", [
              [ "n_Switch", "a00194.html#ga8af26341f909f3eec43de9ad3977b7cc", null ],
              [ "pn_Switch", "a00194.html#ga8c378b1e71b30cd7f445c049b5c95299", null ]
            ] ],
            [ "Functions", "a00194.html", [
              [ "get_op_Switch", "a00194.html#gaa4087cebdc15c5831db8e7e2f1321a9e", null ],
              [ "get_Switch_n_outs", "a00194.html#gab0f0065d84d8d3267d60caf310e284a0", null ],
              [ "get_Switch_selector", "a00194.html#ga8223a729a897cc1464b27bcda7645aa4", null ],
              [ "get_Switch_table", "a00194.html#ga5007b86751c4a22e28a8379c5c28529b", null ],
              [ "ir_new_switch_table", "a00194.html#gadea2ad473a254d14e9e2b2c9cbc60cba", null ],
              [ "ir_switch_table_duplicate", "a00194.html#gad170e83dad8c5d8c9e5675642bda678b", null ],
              [ "ir_switch_table_get_max", "a00194.html#gae4dbab7f72f93c6b487c972e0ef78603", null ],
              [ "ir_switch_table_get_min", "a00194.html#ga1febe3b283d1f9807eed4266e21ce412", null ],
              [ "ir_switch_table_get_n_entries", "a00194.html#ga188f678c011b29db0790418a3169bf21", null ],
              [ "ir_switch_table_get_pn", "a00194.html#gac18b40e2876b0eac9c2a5e67853b379f", null ],
              [ "ir_switch_table_set", "a00194.html#ga0c01cfb2fd3d21a9630a1ed3f4e8e0b5", null ],
              [ "is_Switch", "a00194.html#gae52922a0c38e6eeff057dc593a885473", null ],
              [ "new_d_Switch", "a00194.html#ga4810cd7acc65e85ad9e442917e995791", null ],
              [ "new_r_Switch", "a00194.html#ga86ab9b76f1376173c26688a32d10ff02", null ],
              [ "new_rd_Switch", "a00194.html#ga2142fb3ccd7390c3fc853c363a8cfa51", null ],
              [ "new_Switch", "a00194.html#ga845634c7d554d0fa7b0048e0dfbfd893", null ],
              [ "set_Switch_n_outs", "a00194.html#gaeb5fe53ba1a5b6815c36d4dd6c1c83a1", null ],
              [ "set_Switch_selector", "a00194.html#ga72dece027aa3df147382b7cea8348b66", null ],
              [ "set_Switch_table", "a00194.html#ga9ec2f5bf59b8b42d575966a92fea6b64", null ]
            ] ],
            [ "Variables", "a00194.html", [
              [ "op_Switch", "a00194.html#gabdecbd6d5a5efd2591f910f0b4168406", null ]
            ] ]
          ] ],
          [ "SymConst node", "a00195.html", [
            [ "Defines", "a00195.html", [
              [ "SYMCONST_HAS_ENT", "a00195.html#ga1e7b8c315ffdae17aa8b86687dd17409", null ],
              [ "SYMCONST_HAS_ENUM", "a00195.html#ga9a20f875ff31508a6009fc74339fd080", null ],
              [ "SYMCONST_HAS_TYPE", "a00195.html#gaa96abdb8566006d6afbd465aec84d6ec", null ]
            ] ],
            [ "Enumerations", "a00195.html", [
              [ "symconst_kind", "a00195.html#ga62fdaaab7cc3bcbc32cf939b95a28791", null ]
            ] ],
            [ "Functions", "a00195.html", [
              [ "get_op_SymConst", "a00195.html#ga7c0fcfc0cbcab867a80efcba11e55f61", null ],
              [ "get_SymConst_entity", "a00195.html#ga59f6378e2efb7d2f226a4c656959e745", null ],
              [ "get_SymConst_enum", "a00195.html#ga777d76b8457d5a140b5a2b79f7b86ece", null ],
              [ "get_SymConst_kind", "a00195.html#ga89e2d6342f770a7b9dce44d427d0a49f", null ],
              [ "get_SymConst_symbol", "a00195.html#gaba2d2f3fe3e98dd1eb82c478b70ec399", null ],
              [ "get_SymConst_type", "a00195.html#gaf779b9b445041b98c3913b09eec93607", null ],
              [ "is_SymConst", "a00195.html#ga2b4ad5e8f45020f0951ee21b60231e01", null ],
              [ "is_SymConst_addr_ent", "a00195.html#ga9c589da8de1b91f88cf56929c4249099", null ],
              [ "set_SymConst_entity", "a00195.html#ga86bb3d1dba27d392c279e1f5af4bae98", null ],
              [ "set_SymConst_enum", "a00195.html#gace7513d2de15bf41fe4b98250b5464ef", null ],
              [ "set_SymConst_kind", "a00195.html#ga01103cf3afc0b0026bf06b2d76f0ccf2", null ],
              [ "set_SymConst_symbol", "a00195.html#ga8c545c934a75fbc70a81a22efb92f9cc", null ],
              [ "set_SymConst_type", "a00195.html#ga81f2890a500b6c15ce8e9a08de501228", null ]
            ] ],
            [ "Variables", "a00195.html", [
              [ "op_SymConst", "a00195.html#gad1729c280242e2b281169c48da7e418d", null ]
            ] ],
            [ "Data Structures", "a00195.html", [
              [ "symconst_symbol", "a00020.html", null ]
            ] ]
          ] ],
          [ "Sync node", "a00196.html", [
            [ "Functions", "a00196.html", [
              [ "add_Sync_pred", "a00196.html#gacb200c0d3a8153a138c5c50762cb2d30", null ],
              [ "del_Sync_n", "a00196.html#gaf047cad2e5e769ca39fb2f1e2b5b729d", null ],
              [ "get_op_Sync", "a00196.html#gafc38c22064445d05a151007208d8d926", null ],
              [ "get_Sync_n_preds", "a00196.html#ga204d75df2b1b82ebf5549ebc631bced6", null ],
              [ "get_Sync_pred", "a00196.html#gab9facce5e97f40dc36aeb29ee524203c", null ],
              [ "get_Sync_preds_arr", "a00196.html#ga436b55cf05351fda4d2de14a9cf4ee80", null ],
              [ "is_Sync", "a00196.html#gacd616632971cc50ef99ad2ddd00dd82b", null ],
              [ "new_d_Sync", "a00196.html#gafcef570bed9a09585fa27a8e10eae22f", null ],
              [ "new_r_Sync", "a00196.html#gac5f0b5e64efe30ad4298d5946582402c", null ],
              [ "new_rd_Sync", "a00196.html#ga2f544ba35e348ffdc1a581ac4bd7ed84", null ],
              [ "new_Sync", "a00196.html#ga3bb0c063ab50ce0c040c128ce8f3be16", null ],
              [ "set_Sync_pred", "a00196.html#gaaa911fc6a557974a2b59521b6c898cfd", null ]
            ] ],
            [ "Variables", "a00196.html", [
              [ "op_Sync", "a00196.html#gaafedcb84f0bb26f66497b0ae6b6cefe2", null ]
            ] ]
          ] ],
          [ "Tuple node", "a00197.html", [
            [ "Functions", "a00197.html", [
              [ "get_op_Tuple", "a00197.html#gac3c1410009a7acfc89a7723476fa30f0", null ],
              [ "get_Tuple_n_preds", "a00197.html#ga893713a0600a628bacd148e1e6b8b81b", null ],
              [ "get_Tuple_pred", "a00197.html#gaf3aea2517c77c8cd598521512bc79ad0", null ],
              [ "get_Tuple_preds_arr", "a00197.html#gabde1b4e0132d28aee4dd48c8d9525aaf", null ],
              [ "is_Tuple", "a00197.html#ga4ed17e06200fcfafaf27869356bfdab6", null ],
              [ "new_d_Tuple", "a00197.html#gafce096f15827fe49f1421b931055ade4", null ],
              [ "new_r_Tuple", "a00197.html#gafcbf2e2b7e8c73067ff9db9123270746", null ],
              [ "new_rd_Tuple", "a00197.html#gae699f5504aebe9e60e2c0277f8e5a490", null ],
              [ "new_Tuple", "a00197.html#ga7aea8e479cb6d2a7bf27593bc8d56586", null ],
              [ "set_Tuple_pred", "a00197.html#ga0bd4fddefc2c2c615e881ba6b29584fc", null ]
            ] ],
            [ "Variables", "a00197.html", [
              [ "op_Tuple", "a00197.html#gae0918c8eb31912cb27dfb327c5d84662", null ]
            ] ]
          ] ],
          [ "Unknown node", "a00198.html", [
            [ "Functions", "a00198.html", [
              [ "get_op_Unknown", "a00198.html#ga95dc25d7572498d20e18521c3297f3f6", null ],
              [ "is_Unknown", "a00198.html#gad7d15e009d7852949f5291a82a9f1c8f", null ],
              [ "new_d_Unknown", "a00198.html#ga68f722ef39b05bf326fe713ef6e20085", null ],
              [ "new_r_Unknown", "a00198.html#ga5f7364860654edfdf312e07cc1dc7d12", null ],
              [ "new_rd_Unknown", "a00198.html#gaadde4100747162828aaa862c7549ec29", null ],
              [ "new_Unknown", "a00198.html#ga653d9f229633f37164829ac830acdc25", null ]
            ] ],
            [ "Variables", "a00198.html", [
              [ "op_Unknown", "a00198.html#ga3a81c513998796a5c25c6ee180d02e89", null ]
            ] ]
          ] ],
          [ "Defines", "a00135.html", [
            [ "get_irn_data", "a00135.html#gabde866757641a5b5d2f84c67c71bcc6b", null ],
            [ "get_irn_data_base", "a00135.html#gaff27f849870e342184adcabf73f42f19", null ]
          ] ],
          [ "Typedefs", "a00135.html", [
            [ "ir_node", "a00135.html#gaa86ae27f3059fdeb9ab036ce326d37f2", null ]
          ] ],
          [ "Enumerations", "a00135.html", [
            [ "ir_cons_flags", "a00135.html#gab6ef33aa15c7ba75e8dc94997be6627d", null ],
            [ "ir_relation", "a00135.html#gaab2daaef197bb78789f904157a4e2695", null ],
            [ "op_pin_state", "a00135.html#gab115fbe6ece03598095628fe22cc04b0", null ]
          ] ],
          [ "Functions", "a00135.html", [
            [ "add_irn_dep", "a00135.html#gae7f51ee7cf21492e188bd2bab03abf97", null ],
            [ "add_irn_deps", "a00135.html#gab9f8ac03390fd38b3b603da0904c5565", null ],
            [ "add_irn_n", "a00135.html#gad8194b5e6574a7b828638f6bb49fbb82", null ],
            [ "copy_node_attr", "a00135.html#ga7188d6ca6864696377485987d4d5e3e7", null ],
            [ "firm_default_hash", "a00135.html#ga0d8dd2fffd5871fbb7ed16026fcf7298", null ],
            [ "firm_register_additional_node_data", "a00135.html#gae915db200f7d52bc695564d5382bc2c7", null ],
            [ "gdb_node_helper", "a00135.html#ga09ff460a55bbe47adcdf6f21f6c918c6", null ],
            [ "get_binop_left", "a00135.html#ga33737280dcbd9239e0846832437f404f", null ],
            [ "get_binop_right", "a00135.html#ga926c72018a92046ac8e40888f092467b", null ],
            [ "get_builtin_kind_name", "a00135.html#ga23fffb0bdcacbc1cf58fe4c7899ff144", null ],
            [ "get_cond_jmp_predicate_name", "a00135.html#ga875faaebb74261bf4e795378c6d536b2", null ],
            [ "get_inversed_relation", "a00135.html#gadf7f973b9cabd822134d68f3cb10dd87", null ],
            [ "get_irn_arity", "a00135.html#ga605cce02dec7a8c4ef47b5da4d9f5535", null ],
            [ "get_irn_dbg_info", "a00135.html#ga01a6a0b4674f35dc870b9196ffa8ed2a", null ],
            [ "get_irn_dep", "a00135.html#gaeca76d51c94ccc248bcd3e38ad6f1069", null ],
            [ "get_irn_deps", "a00135.html#ga88f3fbdaa8eb9795d4329a90dd928f93", null ],
            [ "get_irn_entity_attr", "a00135.html#gab6d4b4029a42f4b7d7ad29f58613d417", null ],
            [ "get_irn_generic_attr", "a00135.html#ga6feb9dfcfe0c872b473eb9fc00f0bf9d", null ],
            [ "get_irn_generic_attr_const", "a00135.html#ga8ea1dba42d4941b9af9249e37199d846", null ],
            [ "get_irn_idx", "a00135.html#gac092fd587ad81966ed093b568ba8da61", null ],
            [ "get_irn_irg", "a00135.html#gabfdf926c747f37e352acef7cb1296087", null ],
            [ "get_irn_link", "a00135.html#ga20e4735176f7a73c794f3f2a45f5b4b2", null ],
            [ "get_irn_mode", "a00135.html#gae21c6e25b7b3a0a958b34fb09c538cc8", null ],
            [ "get_irn_n", "a00135.html#gaeb249ca693c1939884c2fc8aadce5c66", null ],
            [ "get_irn_node_nr", "a00135.html#ga7d356bf14637abdf9583a64e13fb1c28", null ],
            [ "get_irn_op", "a00135.html#gaa188fdf75f8320aa58c7140975ba86a0", null ],
            [ "get_irn_opcode", "a00135.html#ga721dfd8e9a07801f8e00d280f6fd05a4", null ],
            [ "get_irn_opident", "a00135.html#ga678592cc508a371e08f5852c680c1963", null ],
            [ "get_irn_opname", "a00135.html#ga979a7da10af6834f872aba6ae2d307c2", null ],
            [ "get_irn_pinned", "a00135.html#ga08e756c97f69bf9545b88588ccef2557", null ],
            [ "get_irn_pred_pos", "a00135.html#gad191c042b68618588bbabcca6872a534", null ],
            [ "get_irn_type_attr", "a00135.html#ga0a75802a7792529f877febc63537f036", null ],
            [ "get_irn_visited", "a00135.html#ga9de1950be5cec800a8996a3634c606ac", null ],
            [ "get_memop_mem", "a00135.html#gaf0236a995cdb297d6d4e1876bae755ce", null ],
            [ "get_negated_relation", "a00135.html#ga40bb28d9dd9fb43135b8945e2cb7faac", null ],
            [ "get_relation_string", "a00135.html#gabb584f8776e5bbfac1c6a974c0f32615", null ],
            [ "get_unop_op", "a00135.html#ga44cf37c0000555ee1095c6a919100b0e", null ],
            [ "ir_set_throws_exception", "a00135.html#gaf74d7f00ac4fbbafd2fc544d5a0145ec", null ],
            [ "ir_throws_exception", "a00135.html#ga8d1e17b3e4aabd4c6775f75cc94027b4", null ],
            [ "irn_visited", "a00135.html#gab3bd624381ba5598e940a5e90f10247d", null ],
            [ "irn_visited_else_mark", "a00135.html#ga3ad6d0fd0ee0f2971249ab6dff338f42", null ],
            [ "is_arg_Proj", "a00135.html#gafeaa9506f7408bc582b40d2901a594df", null ],
            [ "is_binop", "a00135.html#ga86210e0e42980e5226be5a68024ba828", null ],
            [ "is_cfop", "a00135.html#gacf79280f6bbdf1ab9c745c393f88c21d", null ],
            [ "is_fragile_op", "a00135.html#ga7e5f4968d5032004405cbcd624d7d34e", null ],
            [ "is_frame_pointer", "a00135.html#ga1a11645cb2a231d45493b6d1da7c1e12", null ],
            [ "is_ir_node", "a00135.html#gaef56063993d794948cf57227406d9d02", null ],
            [ "is_irn_constlike", "a00135.html#ga2c944167e16131f6f3f24257f26c86e2", null ],
            [ "is_irn_cse_neutral", "a00135.html#gacd53b5bd6fdc8a678a51733af4a07afd", null ],
            [ "is_irn_forking", "a00135.html#ga434e9ba6fd9a8cea2ba5b6fe9b75ef77", null ],
            [ "is_irn_keep", "a00135.html#gadd9d33366d935b0d4da519182343840b", null ],
            [ "is_irn_pinned_in_irg", "a00135.html#ga81b4736c81e3268cb07f3f28817d1fab", null ],
            [ "is_irn_start_block_placed", "a00135.html#ga441b2112ae088a761cbeeeccbf9c174e", null ],
            [ "is_memop", "a00135.html#ga7517529b65fc753e793bffa845939bd5", null ],
            [ "is_unknown_jump", "a00135.html#ga2ef8ee29555c765bf8a0847be6e5c3c8", null ],
            [ "is_unop", "a00135.html#gab384e9f0da7804bb4243988727b5f082", null ],
            [ "is_x_except_Proj", "a00135.html#ga1cd7a3db3cf66460f85f71a4963ce7cd", null ],
            [ "is_x_regular_Proj", "a00135.html#ga4ddcaa513b32d83822acce07548bea19", null ],
            [ "mark_irn_visited", "a00135.html#ga1859536423f641f151df7c9ee3e6bf1d", null ],
            [ "new_ir_node", "a00135.html#gaccb6167d25c73e85d0d30b31944f2c8f", null ],
            [ "set_binop_left", "a00135.html#ga7c8aa3ada4d0724dabf32f435f1693aa", null ],
            [ "set_binop_right", "a00135.html#ga26dd7181928570a8f428c988a95bdfb0", null ],
            [ "set_irn_dbg_info", "a00135.html#ga9457bdb5c427ec5126a73644a5e30a46", null ],
            [ "set_irn_dep", "a00135.html#gac9c3d80eedafa494836b5f89c9e9dc29", null ],
            [ "set_irn_in", "a00135.html#ga5895f1a42d3da6eb512b947111bdc27f", null ],
            [ "set_irn_link", "a00135.html#ga54396d1bdab5a2a0b01697bffd979c40", null ],
            [ "set_irn_mode", "a00135.html#ga4cfd03475d3f31d6d5f51dbec51ee79f", null ],
            [ "set_irn_n", "a00135.html#ga54df50aa9dcb8676c9eeeed4e4834ff0", null ],
            [ "set_irn_op", "a00135.html#gaf0908509eb5af03452bafe0ab499f70d", null ],
            [ "set_irn_pinned", "a00135.html#ga80509ac439bf1394cc2b6775597cb60c", null ],
            [ "set_irn_visited", "a00135.html#ga801e62d446f4b1bfdb3b159c8a693ddf", null ],
            [ "set_memop_mem", "a00135.html#ga89354e8584631edd538aeb109c0126ca", null ],
            [ "set_unop_op", "a00135.html#ga61af7b1808f77682a20b21311e8fee05", null ],
            [ "skip_Cast", "a00135.html#ga219415fceeb484320eea66fc7f93f116", null ],
            [ "skip_Cast_const", "a00135.html#gad2e833ce3a4f7e9f5824d50bee0aed1d", null ],
            [ "skip_Confirm", "a00135.html#gacc9b24f0be9d68c579ec2ed9c53ac01a", null ],
            [ "skip_HighLevel_ops", "a00135.html#ga86f903ff757ba5fe3f5c715bb2de90a1", null ],
            [ "skip_Id", "a00135.html#ga4283e47cbbe2f77d40d3ffb2d56ee090", null ],
            [ "skip_Pin", "a00135.html#gac47c258268e83996dc54fad6ac1a586e", null ],
            [ "skip_Proj", "a00135.html#ga74c7438a2571af72f8fd6aa5c8d24f60", null ],
            [ "skip_Proj_const", "a00135.html#gac4250c3b6f037b5676f4c2baede747b6", null ],
            [ "skip_Tuple", "a00135.html#ga7bedd8b2c303c8214ac5c62368d0fa36", null ]
          ] ]
        ] ],
        [ "Defines", "a00129.html", [
          [ "get_irg_data", "a00129.html#ga99a2c5b3d717f58978c2bf9c2a86fb01", null ],
          [ "get_irg_data_base", "a00129.html#gac7e42ad61c0906a1f9e7413d5be08128", null ]
        ] ],
        [ "Typedefs", "a00129.html", [
          [ "ir_graph", "a00129.html#gaf6a2a1e9e04e7719667f8b5945ecdd24", null ]
        ] ],
        [ "Enumerations", "a00129.html", [
          [ "ir_graph_state_t", "a00129.html#ga0313a483fc8715649b7e1261c2865834", null ],
          [ "ir_resources_t", "a00129.html#ga6b1f6919bdc71fff873a8a3aecdc587a", null ],
          [ "irg_callee_info_state", "a00129.html#ga57cb4514ea64a053aacb6b5ec5e70477", null ],
          [ "irg_inline_property", "a00129.html#ga3d4a8c0239ad8ec4405eb5241a3e1948", null ],
          [ "irg_phase_state", "a00129.html#ga3719bbd8b199afbc02e1d48ff03b6942", null ]
        ] ],
        [ "Functions", "a00129.html", [
          [ "add_irg_additional_properties", "a00129.html#ga64a2272e9a9060ee0a761122522d1725", null ],
          [ "clear_irg_state", "a00129.html#ga5608a483da822a6c41a8dc6a4873967a", null ],
          [ "free_ir_graph", "a00129.html#gaf398dbcf583cbc70d73ab6b6d0ccb084", null ],
          [ "get_idx_irn", "a00129.html#gada50540b74d8bc9b066d5cd263a151bf", null ],
          [ "get_irg_additional_properties", "a00129.html#ga9713c7f4374459587b1561710d8395a3", null ],
          [ "get_irg_args", "a00129.html#gae276bf4cff462cf1bdda6c41b21a6105", null ],
          [ "get_irg_block_visited", "a00129.html#gab5b55e580a36bb4518902d355a84af6d", null ],
          [ "get_irg_callee_info_state", "a00129.html#ga2155ab5deeedb5d0e4036435d5ed9118", null ],
          [ "get_irg_end", "a00129.html#ga89b6986b864b676a876620feaef286bb", null ],
          [ "get_irg_end_block", "a00129.html#gabaef39e0c1b190f9550a1d61d55f2960", null ],
          [ "get_irg_entity", "a00129.html#gaf6d92ccdb47ffd81bb5e8bde98e93668", null ],
          [ "get_irg_estimated_node_cnt", "a00129.html#gafa5a80df567c58611806796735bebd15", null ],
          [ "get_irg_fp_model", "a00129.html#ga8d3a8699bc92f89f50ddc1b7858329dd", null ],
          [ "get_irg_frame", "a00129.html#gac18fdd7a232723c32ef6d7226d64ddf7", null ],
          [ "get_irg_frame_type", "a00129.html#ga76ba06f8149979d731dca300cd17a147", null ],
          [ "get_irg_graph_nr", "a00129.html#ga58e45ab327ec4094908f596dab3f48c9", null ],
          [ "get_irg_idx", "a00129.html#ga1508641ea41972190727e7fa5d81607b", null ],
          [ "get_irg_initial_exec", "a00129.html#ga0bffd2bcb909991df7d16b6b0170e2f7", null ],
          [ "get_irg_initial_mem", "a00129.html#ga246a3cecd01d33fbcef516322c90f37e", null ],
          [ "get_irg_inline_property", "a00129.html#gaa240d512b0b0988df49836dd5813d1b9", null ],
          [ "get_irg_last_idx", "a00129.html#gaae4eb6fe4a20cd45ab32e3cd2c45285b", null ],
          [ "get_irg_link", "a00129.html#gaa461ed15a9203261269ce48b102a3277", null ],
          [ "get_irg_loc_description", "a00129.html#gac922917d9f151104219a922b8ae5bc1d", null ],
          [ "get_irg_n_locs", "a00129.html#ga32ca5f2171e17e0cd5c8279f9f169c7e", null ],
          [ "get_irg_no_mem", "a00129.html#ga18f791948ab73e721f20bda8f442c3f9", null ],
          [ "get_irg_phase_state", "a00129.html#ga30f577508ec7591aba86a13df547d148", null ],
          [ "get_irg_pinned", "a00129.html#ga89d2f7515a3f1da40d2f973f57af7e79", null ],
          [ "get_irg_start", "a00129.html#ga54b3598dc3e3d6dd277d8e91cef3eef1", null ],
          [ "get_irg_start_block", "a00129.html#ga55c2b105e80f157d41cb7aabc4f7fbb1", null ],
          [ "get_irg_visited", "a00129.html#ga98a3e7420a8376629de9e2cf7a04e1cd", null ],
          [ "get_max_irg_visited", "a00129.html#gab9bd8945e96e660bcd4441f09c6155f8", null ],
          [ "inc_irg_block_visited", "a00129.html#ga584355952826c2ad6b84a191cf37578e", null ],
          [ "inc_irg_visited", "a00129.html#gac53ad5ce3ea5fbe3d94afad34389e293", null ],
          [ "inc_max_irg_visited", "a00129.html#ga55df85cb5d729d4d89747eccf4cd136f", null ],
          [ "ir_free_resources", "a00129.html#ga9f950c31fd5021bd170651132fa92291", null ],
          [ "ir_reserve_resources", "a00129.html#ga929a3970e446d930ae906f59957ea5c2", null ],
          [ "ir_resources_reserved", "a00129.html#gaee47edfa40b492c1e2b4cdf184e70792", null ],
          [ "is_ir_graph", "a00129.html#gac682c54162f478775432f4e761f661d8", null ],
          [ "is_irg_state", "a00129.html#ga340df478d998255bda787530ecf5b754", null ],
          [ "new_ir_graph", "a00129.html#ga05732b4d281f039e25757f231a70db23", null ],
          [ "register_additional_graph_data", "a00129.html#ga056a7e271f2e403a51eba86324d74baa", null ],
          [ "set_irg_additional_properties", "a00129.html#gaa9cc465be52ea93e397375e9ffe20b67", null ],
          [ "set_irg_args", "a00129.html#ga5f34529b259ac652306d03a6c3a676df", null ],
          [ "set_irg_block_visited", "a00129.html#ga801f5573132da4ef0f5a35dd73ca63e7", null ],
          [ "set_irg_callee_info_state", "a00129.html#gaee2747d3b4858eaecd25c113957859b3", null ],
          [ "set_irg_end", "a00129.html#ga098704138deb5e8760501ba3b574f606", null ],
          [ "set_irg_end_block", "a00129.html#ga2e183ded03016b7d018eab889a7d629c", null ],
          [ "set_irg_entity", "a00129.html#gaf7f6ade8fbd71bdd808b3222e3885709", null ],
          [ "set_irg_fp_model", "a00129.html#ga02669cd32069f2272b31edf7500099e9", null ],
          [ "set_irg_frame", "a00129.html#gafc04e2646a4766ddf565bfe849a37cc5", null ],
          [ "set_irg_frame_type", "a00129.html#gaa88166af9b125c1a4fdfb566647d6826", null ],
          [ "set_irg_initial_exec", "a00129.html#ga3fba06661d4401e293457e5ff97091ad", null ],
          [ "set_irg_initial_mem", "a00129.html#ga05ff2736e26b00a52d2d6444885fce9f", null ],
          [ "set_irg_inline_property", "a00129.html#ga41aa2755f551c0bcdae9e6ec5b6abb66", null ],
          [ "set_irg_link", "a00129.html#gac90ebfa7a8708674fce3651960f886f1", null ],
          [ "set_irg_loc_description", "a00129.html#ga0ff31539e291fa72ec059e85168ca687", null ],
          [ "set_irg_no_mem", "a00129.html#gacb885bb79fac5079276508b06c5a1c2b", null ],
          [ "set_irg_phase_state", "a00129.html#gafbdaa3b01eb771102b75768edac8cb16", null ],
          [ "set_irg_start", "a00129.html#gaf8efa37b829743800819224dd1af15b7", null ],
          [ "set_irg_start_block", "a00129.html#gad931c0fcd2b62174f6d5e4db848826c9", null ],
          [ "set_irg_state", "a00129.html#ga889964ab64110a5b15117b1aa68bc80a", null ],
          [ "set_irg_visited", "a00129.html#ga200ab019fe5e2d320d277bf791a2727c", null ],
          [ "set_max_irg_visited", "a00129.html#ga93a7336861ef72951ea021a09a3bdbf9", null ]
        ] ]
      ] ],
      [ "Input and Output", "a00131.html", [
        [ "Functions", "a00131.html", [
          [ "ir_export", "a00131.html#gad8837181f6673bb38d273e5e5b84c4ad", null ],
          [ "ir_export_file", "a00131.html#ga301e5fa64acf465d8fd5ab292678d0b2", null ],
          [ "ir_import", "a00131.html#gaf74331400c93cfb9a18b5ad162fc3879", null ],
          [ "ir_import_file", "a00131.html#ga0e2f40e1cc98131aa26984e4dc5106c7", null ]
        ] ]
      ] ],
      [ "Value Modes", "a00134.html", [
        [ "Typedefs", "a00134.html", [
          [ "ir_mode", "a00134.html#gabb45fd288af194763a5ff0e3666a4b88", null ]
        ] ],
        [ "Enumerations", "a00134.html", [
          [ "ir_mode_arithmetic", "a00134.html#ga62bad2a956bdeaf4c1c150709db88ae8", null ]
        ] ],
        [ "Functions", "a00134.html", [
          [ "find_double_bits_int_mode", "a00134.html#ga00a2b6fece447788452faed0f3ac930f", null ],
          [ "find_signed_mode", "a00134.html#gaa13aceb5e6e9282985df6ae1c9db63cb", null ],
          [ "find_unsigned_mode", "a00134.html#ga3def742ca372b4afc6060bc007a5f1e8", null ],
          [ "get_mode_all_one", "a00134.html#gaa9400d5991d317b590f610d1d25f1c72", null ],
          [ "get_mode_arithmetic", "a00134.html#gae78d9abea5771d3b50b4660a2dadbf88", null ],
          [ "get_mode_exponent_size", "a00134.html#ga7bdad51cf5431ee67cf60fa325b07764", null ],
          [ "get_mode_ident", "a00134.html#ga64cdab0ec67d2949b72f8069493ca59f", null ],
          [ "get_mode_infinite", "a00134.html#ga3e4ebf23407f0a010fde7409c4febddd", null ],
          [ "get_mode_link", "a00134.html#ga1248e36a2fce673e13f2795f9b171a71", null ],
          [ "get_mode_mantissa_size", "a00134.html#ga6eeb6ea0dfe3c1d8f841f77f499784b4", null ],
          [ "get_mode_max", "a00134.html#gab6cc9eaaf43007002aecf56ba64d663e", null ],
          [ "get_mode_min", "a00134.html#ga27aa8ea2dfd111225c2cff03b7235bf9", null ],
          [ "get_mode_minus_one", "a00134.html#ga73f4b5534f8a0a3ecf11738f211bc575", null ],
          [ "get_mode_modulo_shift", "a00134.html#gad97a00f407d11c7fc21618acecd19aa0", null ],
          [ "get_mode_name", "a00134.html#ga615e3a3c179c94455b006f58c73112ba", null ],
          [ "get_mode_NAN", "a00134.html#ga3306ba033bde8ae576b63b0b43a68dce", null ],
          [ "get_mode_null", "a00134.html#ga084a83e94b581012525759258a1b6c80", null ],
          [ "get_mode_one", "a00134.html#gada0751273ff1198329419d254468a01d", null ],
          [ "get_mode_sign", "a00134.html#ga782381f879e9ea0ab305ac0ff189f5d1", null ],
          [ "get_mode_size_bits", "a00134.html#gaf628d304524882477523d95e65f2f4db", null ],
          [ "get_mode_size_bytes", "a00134.html#ga4081fddf7ebddef8103e5672abc2397a", null ],
          [ "get_modeANY", "a00134.html#ga110395ac9afd8079aef6bd6d17b98e51", null ],
          [ "get_modeb", "a00134.html#ga556cec15634daf607fec4dcf298cd264", null ],
          [ "get_modeBAD", "a00134.html#gae28ad2f1f741329924029f890b86bb7d", null ],
          [ "get_modeBB", "a00134.html#ga6f250972108f90738976b37d19eca1f1", null ],
          [ "get_modeBs", "a00134.html#ga1f32d342f91ec42fc57c11740a12e1f4", null ],
          [ "get_modeBu", "a00134.html#gaad3333e16d164ca229969b417211a768", null ],
          [ "get_modeD", "a00134.html#ga8ff0194c36f6f0d68c90c36d71ff868f", null ],
          [ "get_modeF", "a00134.html#gaa977b9368b1a2eba459bd07262b23d19", null ],
          [ "get_modeHs", "a00134.html#ga923e3fa945ee373a8310468e16626005", null ],
          [ "get_modeHu", "a00134.html#ga51eaae8144da1778a64aa3f84354c4df", null ],
          [ "get_modeIs", "a00134.html#ga45132b390dec1157e5564340cb0dcd09", null ],
          [ "get_modeIu", "a00134.html#gae38f1350b9be19e082fef50b1682f09b", null ],
          [ "get_modeLLs", "a00134.html#ga51e4ebdaa8379c0c6f4edda492af4b26", null ],
          [ "get_modeLLu", "a00134.html#ga791da05df82c756a5029110d49352bc8", null ],
          [ "get_modeLs", "a00134.html#gab25861ff7f263c8c0b399992d5ae31ff", null ],
          [ "get_modeLu", "a00134.html#ga3313da3abe7713f84df91645e9f53c30", null ],
          [ "get_modeM", "a00134.html#ga2b1c3fe4ab8e38e91c27c097e039887f", null ],
          [ "get_modeP", "a00134.html#ga16ddb1a3dd5fd3ae2a64e0a4868eba1c", null ],
          [ "get_modeP_code", "a00134.html#gab62e2b002c45ec247adbe9de843f776c", null ],
          [ "get_modeP_data", "a00134.html#gad77527f86d06bac3705ff936dffef35b", null ],
          [ "get_modeQ", "a00134.html#gad03e57a0f013ddcf0a2217a7fde5f0be", null ],
          [ "get_modeT", "a00134.html#gafcb329b31b2ba00f3a1aa09b3ad30730", null ],
          [ "get_modeX", "a00134.html#ga88bab1a26a3e4edaadb6b795b42f2ee4", null ],
          [ "get_reference_mode_signed_eq", "a00134.html#ga1a6cbce657938698b49b9e34a0ff38b5", null ],
          [ "get_reference_mode_unsigned_eq", "a00134.html#ga5fb3b13104d31b30b6031adf03fa0250", null ],
          [ "get_type_for_mode", "a00134.html#ga56b0c337e4b24e261c3bd7b1c0b115e5", null ],
          [ "ir_get_mode", "a00134.html#ga1f54ae23431306ce23ac039c6645f498", null ],
          [ "ir_get_n_modes", "a00134.html#ga15203d7bac94c2b1a6705bf2ff9d3e58", null ],
          [ "is_mode", "a00134.html#gaba9d7a9e0831d084ad2704d917087777", null ],
          [ "is_reinterpret_cast", "a00134.html#gad887ce425cbe2767c8d097161666ceb9", null ],
          [ "mode_honor_signed_zeros", "a00134.html#ga093f198f2a5342eae4f08045618eb980", null ],
          [ "mode_is_data", "a00134.html#gacf2b10cc18a6bf4bef63405c5f42b851", null ],
          [ "mode_is_datab", "a00134.html#ga32089a571c5373a44e330a6e6a606f97", null ],
          [ "mode_is_dataM", "a00134.html#gae99c9572eb310cb839417c33b863553e", null ],
          [ "mode_is_float", "a00134.html#gab084a3741244637045c3063deb5458f1", null ],
          [ "mode_is_int", "a00134.html#ga6c07bff8de79daaa71acf2c0ee83d370", null ],
          [ "mode_is_num", "a00134.html#ga2337adef1231c1d4f80903b91189f2db", null ],
          [ "mode_is_reference", "a00134.html#gac3935b0ee78dba5d33f261a35a01e587", null ],
          [ "mode_is_signed", "a00134.html#ga01cd93de2ccb0e7e13df0ad7dd4884bd", null ],
          [ "mode_overflow_on_unary_Minus", "a00134.html#ga58a67e08e453119ca332b23ccdbf3d42", null ],
          [ "mode_wrap_around", "a00134.html#gae741e151c342bf39eac55c5064573df1", null ],
          [ "new_float_mode", "a00134.html#ga551189390eb02a74fc469df25c142f04", null ],
          [ "new_int_mode", "a00134.html#ga42490c367589bdf8e784df08ae90c32b", null ],
          [ "new_reference_mode", "a00134.html#gadf5c72c583ba69edb594beca205e5945", null ],
          [ "set_mode_link", "a00134.html#ga1e840833eacd2cf51a62d46ee5aeb99b", null ],
          [ "set_modeP_code", "a00134.html#ga3311f8fbac9ce9acf232b9c22f4bb71c", null ],
          [ "set_modeP_data", "a00134.html#ga7a6df1a7919806a60138d0fd38e164a2", null ],
          [ "set_reference_mode_signed_eq", "a00134.html#gacd9c5940cdf83604684e870307ab6938", null ],
          [ "set_reference_mode_unsigned_eq", "a00134.html#ga41e3c464b1f128694967cb0f0ff33102", null ],
          [ "smaller_mode", "a00134.html#ga5a593076885591ab7a7cf26f8b127e65", null ],
          [ "values_in_mode", "a00134.html#ga2800e2c76f296b097d0871214414d98e", null ]
        ] ],
        [ "Variables", "a00134.html", [
          [ "mode_ANY", "a00134.html#ga79993868ed3c64c1d5ad3fac0cf78dbf", null ],
          [ "mode_b", "a00134.html#gaccb1d71fbda643c8d101e30fe03762e7", null ],
          [ "mode_BAD", "a00134.html#gaddff6b98e8e1f4c181cbf805582f0eb7", null ],
          [ "mode_BB", "a00134.html#ga7b95d9dda1fdf1d46444036bfc4c63c7", null ],
          [ "mode_Bs", "a00134.html#gaa29c3274db48bb27e531995791c485e5", null ],
          [ "mode_Bu", "a00134.html#ga305b30e54c4afa728d6c2cd8b4f355ba", null ],
          [ "mode_D", "a00134.html#gae308d498383c74d26e211a82d18c5247", null ],
          [ "mode_F", "a00134.html#ga6ee9fe90dae401f56d2f17793d7f6712", null ],
          [ "mode_Hs", "a00134.html#ga6c26e866160406bc6bbaceb59865ae82", null ],
          [ "mode_Hu", "a00134.html#gade2327ba6afba0db212d7d5cf2b297a8", null ],
          [ "mode_Is", "a00134.html#gad47d8538e3a7e37fa7051b58ad894509", null ],
          [ "mode_Iu", "a00134.html#gac7bf5dfbb8a64a5777594f1a080ab2f2", null ],
          [ "mode_LLs", "a00134.html#ga5254d0b438b0b030eea782fde648cd4d", null ],
          [ "mode_LLu", "a00134.html#ga205ba9efc5036aa2eb56b1840a3023f9", null ],
          [ "mode_Ls", "a00134.html#ga34da87ac36a13625aa4f495bfaa7a3ea", null ],
          [ "mode_Lu", "a00134.html#ga8ed6447ffd1da0cf09255f2c5a8569f3", null ],
          [ "mode_M", "a00134.html#ga0dda2421a9b0bf5230e1aee6b652b0bf", null ],
          [ "mode_P", "a00134.html#ga33313760fa1bc6020caffa298d33477b", null ],
          [ "mode_P_code", "a00134.html#gace6e776c4dae5061e9c07f6ea260c2bc", null ],
          [ "mode_P_data", "a00134.html#ga8c64f1e0f6025291b1fac16ea91e5574", null ],
          [ "mode_Q", "a00134.html#ga364a0453c33e4fab6674dd63f37f3dc4", null ],
          [ "mode_T", "a00134.html#gab019ac60cefdc092e84c773b576bb35d", null ],
          [ "mode_X", "a00134.html#ga9e6a3b4c452ef847f13a8f4005818e0a", null ]
        ] ]
      ] ],
      [ "Transformations and Optimisations", "a00138.html", [
        [ "Flags", "a00126.html", [
          [ "Typedefs", "a00126.html", [
            [ "optimization_state_t", "a00126.html#ga124e3595d2051d2cd1ae4303308d6478", null ]
          ] ],
          [ "Functions", "a00126.html", [
            [ "all_optimizations_off", "a00126.html#ga5209e9e0642cb143dac82378074a4863", null ],
            [ "get_opt_cse", "a00126.html#gad5146881b91f12a25847f4312e29fde4", null ],
            [ "get_opt_suppress_downcast_optimization", "a00126.html#ga216afde0c77dcd214eac824049d71dac", null ],
            [ "get_optimize", "a00126.html#ga48af1bbaa39034cfa2c86fee7fbf68b3", null ],
            [ "restore_optimization_state", "a00126.html#gade9cf4da78b84069eec3ce9b1d227c36", null ],
            [ "save_optimization_state", "a00126.html#gadf8ef728da068b28f9bcae9188aedf47", null ],
            [ "set_opt_algebraic_simplification", "a00126.html#ga45a87303d6b55ffad2c8ef3fcc05e432", null ],
            [ "set_opt_alias_analysis", "a00126.html#gafdc59264785bd80337e6904b3f2ea0fd", null ],
            [ "set_opt_auto_create_sync", "a00126.html#ga6ed1a7c60359829b4a029cf8668376e0", null ],
            [ "set_opt_closed_world", "a00126.html#ga1d5aa0934d91621d442637d87eacad27", null ],
            [ "set_opt_constant_folding", "a00126.html#gac79725b162eda18bdfea665d1f871feb", null ],
            [ "set_opt_cse", "a00126.html#ga2534cb3aa2e9cc1ee44dae41c24892e1", null ],
            [ "set_opt_global_cse", "a00126.html#gab672f130a6097c7b3598a2c70fcb695d", null ],
            [ "set_opt_global_null_ptr_elimination", "a00126.html#ga2c3e580c1ea8759777302edbaee24869", null ],
            [ "set_opt_suppress_downcast_optimization", "a00126.html#gad3bc0e8cc1ac111761ea95918f2b5fc6", null ],
            [ "set_optimize", "a00126.html#gacc89212d8acfa96bc2ed08bef0140b4a", null ]
          ] ]
        ] ],
        [ "Graph Transformations", "a00128.html", [
          [ "Functions", "a00128.html", [
            [ "local_optimize_graph", "a00128.html#ga3cd73fb8cdd1a0fa53bf0b26c7f75a03", null ],
            [ "local_optimize_node", "a00128.html#gaf0d27792b3bc2c5e58681c233fbf8f85", null ],
            [ "local_opts", "a00128.html#ga22363b450724d0659165ba11d9667f81", null ],
            [ "optimize_graph_df", "a00128.html#ga84953ec57afd698ca30d90605bfffa4c", null ],
            [ "optimize_graph_df_pass", "a00128.html#ga21584edbde3ce03619f36651ba4cc872", null ],
            [ "remove_bads", "a00128.html#ga2f4dd6ca9b0a6036d2505036ca7be113", null ],
            [ "remove_critical_cf_edges", "a00128.html#ga8edc0cb3ed354c54eaa8f88bf322079a", null ],
            [ "remove_critical_cf_edges_ex", "a00128.html#gaaeb79f412676af89fe882c70fcabcd46", null ],
            [ "remove_tuples", "a00128.html#ga5ff8b21861ab3875eeeffa59ccfbb16b", null ],
            [ "remove_unreachable_code", "a00128.html#gaf52388e24ef3d594da2a3202bc5fc3c8", null ]
          ] ]
        ] ],
        [ "Local Optimizations", "a00137.html", [
          [ "Enumerations", "a00137.html", [
            [ "fp_model_t", "a00137.html#ga8f54922a116e9e8b52e0dea1fa05a514", null ]
          ] ],
          [ "Functions", "a00137.html", [
            [ "computed_value", "a00137.html#ga787167558e06ab30c7ab79c6e49e7c56", null ],
            [ "ir_get_possible_cmp_relations", "a00137.html#ga3f0a6d80e812c5caa4613a637ddadf59", null ],
            [ "ir_is_negated_value", "a00137.html#gac32f3e903492a84e6d6b667377468ed1", null ],
            [ "optimize_in_place", "a00137.html#gab0904f4ad02bb65f7a9cc4bd0ae2b767", null ]
          ] ]
        ] ],
        [ "Defines", "a00138.html", [
          [ "DEFAULT_CLONE_THRESHOLD", "a00138.html#gaa20975b71dbfdf633243725fb1581679", null ],
          [ "osr_flag_default", "a00138.html#ga59738bb835a4d0d1388cd6aae5b66974", null ]
        ] ],
        [ "Typedefs", "a00138.html", [
          [ "arch_allow_ifconv_func", "a00138.html#gaad391b7bdc7e1fb59586ac8a10d31ab7", null ],
          [ "check_alloc_entity_func", "a00138.html#ga3ad5aab76cb45479207ae4be0352d1a3", null ],
          [ "compilerlib_entity_creator_t", "a00138.html#ga21133ed9c9c8e7a8aa78e6421e54d01f", null ],
          [ "gen_pointer_type_to_func", "a00138.html#ga1f9c196513119cc2d6f5fafe2ed472cc", null ],
          [ "opt_ptr", "a00138.html#gafe264e690173189735e67c94f107a80c", null ]
        ] ],
        [ "Enumerations", "a00138.html", [
          [ "osr_flags", "a00138.html#ga53abb9b8cc201d424649b251a8e303b4", null ]
        ] ],
        [ "Functions", "a00138.html", [
          [ "can_replace_load_by_const", "a00138.html#gacb9c902e7677cb72f54c759d14e6b1b9", null ],
          [ "classify_value_sign", "a00138.html#gac48cb7954ad57919862afd2d6f71c511", null ],
          [ "combo", "a00138.html#gac32a8900c4aa44431c56d50171e702da", null ],
          [ "combo_pass", "a00138.html#gafa81d6d8780f694b4223df8fa4a25a06", null ],
          [ "computed_value_Cmp_Confirm", "a00138.html#ga987d9be9d5a4580203dd2ccc444d02b8", null ],
          [ "conv_opt", "a00138.html#ga24a5db5332f90278ad81fcd186e9fcb8", null ],
          [ "conv_opt_pass", "a00138.html#ga99219cebbcd59749826f1095cc8d92c2", null ],
          [ "create_compilerlib_entity", "a00138.html#gafca06f3cea823ab1ca630070f4e802b7", null ],
          [ "dead_node_elimination", "a00138.html#gaea70e1707c7c8fa52482025162908069", null ],
          [ "dead_node_elimination_pass", "a00138.html#ga48cc5ab0a6b5a49f4d26bedbf4822881", null ],
          [ "do_gvn_pre", "a00138.html#ga95391096ce1c40122d400393ea6b3373", null ],
          [ "do_gvn_pre_pass", "a00138.html#gabcbfec356fe3bb3f6cdf70d943cf8105", null ],
          [ "do_loop_inversion", "a00138.html#ga95271f14cf70188665a0356a3180c459", null ],
          [ "do_loop_peeling", "a00138.html#ga09f81b76d3688ea0c8c18fa96c3f978f", null ],
          [ "do_loop_unrolling", "a00138.html#gae7e0d72a0309b1a204b7d27707e7c0d1", null ],
          [ "escape_analysis", "a00138.html#ga32e1816aba4f02e147d052e920aba75b", null ],
          [ "escape_enalysis_irg", "a00138.html#ga521acd4d95d1a4195c4290e53d9eebcb", null ],
          [ "fixpoint_vrp", "a00138.html#ga5606f6cd5edfc2b09cfdb96b594e224f", null ],
          [ "fixpoint_vrp_irg_pass", "a00138.html#ga877f2b6d57fdd5f9e347a2703c31366d", null ],
          [ "garbage_collect_entities", "a00138.html#ga296a2e746af5a301f50ef497634f3645", null ],
          [ "garbage_collect_entities_pass", "a00138.html#ga82c6e8b9fdb69fd9a065d3ffceb66d5e", null ],
          [ "get_compilerlib_entity_creator", "a00138.html#ga497cb3ad7f450a58d9d88715534affa1", null ],
          [ "inline_functions", "a00138.html#ga0ba2ae1263d4d78fc5bdd91b2b6f38b8", null ],
          [ "inline_functions_pass", "a00138.html#ga6e83f2b4bf8bcd7c0a9db1856ed44e60", null ],
          [ "inline_leave_functions", "a00138.html#ga134676a32ba690c308d2e58a5a3b5a2d", null ],
          [ "inline_leave_functions_pass", "a00138.html#gacbf24d9c1ce2a272de5f509443671e12", null ],
          [ "inline_method", "a00138.html#gab61b27d0e1e7892bddab7af340100073", null ],
          [ "inline_small_irgs", "a00138.html#ga289139df4f7b593229b4f1689537cdc6", null ],
          [ "inline_small_irgs_pass", "a00138.html#gacb7950eae999c8f71488da05d126683e", null ],
          [ "loop_inversion_pass", "a00138.html#gaf05635c9b5c4f539ca672e2b3691764c", null ],
          [ "loop_optimization", "a00138.html#ga133f5803ec53eec70005924c1330ca7a", null ],
          [ "loop_peeling_pass", "a00138.html#ga13262955cafe372d41dda96b83ed069b", null ],
          [ "loop_unroll_pass", "a00138.html#gade1c8f1097a4ce866e2973754bd5b7a1", null ],
          [ "normalize_irg_class_casts", "a00138.html#gafb28c804a5e0932830a89150e94bd3fd", null ],
          [ "normalize_irp_class_casts", "a00138.html#ga2c7f8b5583d109f2f5a3575744bf2cdd", null ],
          [ "normalize_n_returns", "a00138.html#ga69399d4c6a8a7c789698e73264653145", null ],
          [ "normalize_n_returns_pass", "a00138.html#ga48b1cc1c9c75f16bca2767272aab5f3a", null ],
          [ "normalize_one_return", "a00138.html#ga23da5562f49a6b93c65c2c2187a124e2", null ],
          [ "normalize_one_return_pass", "a00138.html#gac1b51910c6614ed9fdf3024f09ae4520", null ],
          [ "opt_bool", "a00138.html#ga0912d78278d4bbd067d146150a0a246a", null ],
          [ "opt_bool_pass", "a00138.html#gae6f5bb2763b0d8d5c52127bf71fa85b0", null ],
          [ "opt_frame_irg", "a00138.html#ga2edb9357b994ddce3ed8f9a80797724e", null ],
          [ "opt_frame_irg_pass", "a00138.html#ga76a79ff646001a342f81510fea4895ee", null ],
          [ "opt_if_conv", "a00138.html#gaad3feb65d42187719d14cdc55f758c11", null ],
          [ "opt_if_conv_pass", "a00138.html#gabd61b54fd69d6993d2de624a8c46a102", null ],
          [ "opt_jumpthreading", "a00138.html#gac83b9e1da3ad7b42b056508100a486bd", null ],
          [ "opt_jumpthreading_pass", "a00138.html#ga76b8325ad91a07a39d93fdaac5e085c8", null ],
          [ "opt_ldst", "a00138.html#ga3cba674ddb026d88f8f2ec2e676f93af", null ],
          [ "opt_ldst_pass", "a00138.html#ga523f775abed92f759f74253e16c8d59e", null ],
          [ "opt_osr", "a00138.html#ga7d414b64d5b1a085b5ad33e44af6f53e", null ],
          [ "opt_osr_pass", "a00138.html#ga4280c2040df18ebe00938c48b31d5782", null ],
          [ "opt_parallelize_mem", "a00138.html#ga0017b31cc79388717a01c16c0c7b463e", null ],
          [ "opt_parallelize_mem_pass", "a00138.html#gaf9f6eb252d1efa497741308774e06713", null ],
          [ "opt_tail_rec_irg", "a00138.html#gab32ab9d5cc9aa0932c631dd464ce4399", null ],
          [ "opt_tail_rec_irg_pass", "a00138.html#ga04c217896283b8824a8ab1567c4162ba", null ],
          [ "opt_tail_recursion", "a00138.html#gae00d5d943c331d5ffc5faacf1b0fb462", null ],
          [ "opt_tail_recursion_pass", "a00138.html#ga123be1a92d8287964d61f96ae58d8a2a", null ],
          [ "optimize_cf", "a00138.html#gaf903ed59861491fbbabf628f97ed9047", null ],
          [ "optimize_cf_pass", "a00138.html#ga6c5351b967040f1fd55c9f53944bfae7", null ],
          [ "optimize_class_casts", "a00138.html#ga78abb4411c03cfb2421662c4f033e169", null ],
          [ "optimize_funccalls", "a00138.html#ga407e5d3623c2fec8d3cd379ab1dbed40", null ],
          [ "optimize_funccalls_pass", "a00138.html#gaa2c2a80c4d5ac443760a69493ecd371e", null ],
          [ "optimize_load_store", "a00138.html#gab2cc6fe331da550362a12f385c66fb68", null ],
          [ "optimize_load_store_pass", "a00138.html#ga847d113962186933e7933dc80755fed9", null ],
          [ "optimize_reassociation", "a00138.html#ga14293c68c5cd65c4dc35a4509a82780f", null ],
          [ "optimize_reassociation_pass", "a00138.html#gaa171e6ddab95547857c6080faafbf4b7", null ],
          [ "place_code", "a00138.html#ga0079378f51512c81055cbe916a2514b7", null ],
          [ "place_code_pass", "a00138.html#gae89d211808907b2f3f5a9a1cea90fba0", null ],
          [ "proc_cloning", "a00138.html#ga1d27ce3f74242e5134ba8939c1f04079", null ],
          [ "proc_cloning_pass", "a00138.html#gabfaf28505930dffc710958b2333cd09e", null ],
          [ "remove_phi_cycles", "a00138.html#ga756175bf943ce204f24b9370feb1c9da", null ],
          [ "remove_phi_cycles_pass", "a00138.html#gacdcd981bb2fc15ec4104d0c3a49f47af", null ],
          [ "scalar_replacement_opt", "a00138.html#ga7aae0c2fbecc4cb130084a7597761bd6", null ],
          [ "scalar_replacement_opt_pass", "a00138.html#ga77a262662e6890d8a76bc0e1435fe300", null ],
          [ "set_compilerlib_entity_creator", "a00138.html#ga2a2f99efae84cc79f3355b909c034025", null ],
          [ "set_vrp_pass", "a00138.html#gac128c9f1177304ac18eabd80e11fcef9", null ],
          [ "shape_blocks", "a00138.html#ga493b2be61c71fec4aff59f5612e07d76", null ],
          [ "shape_blocks_pass", "a00138.html#gaa5a7a8f0491c33ff7683e562750c5478", null ],
          [ "value_not_null", "a00138.html#ga3b35667fad412939271852a18756c710", null ],
          [ "value_not_zero", "a00138.html#ga3b0b3f93617c9db276b79d895b706e27", null ]
        ] ]
      ] ],
      [ "Program", "a00140.html", [
        [ "Typedefs", "a00140.html", [
          [ "ir_prog", "a00140.html#gaec1d4e60305d734876a9420d2a95ec17", null ]
        ] ],
        [ "Enumerations", "a00140.html", [
          [ "ir_segment_t", "a00140.html#gab9a93770c29f8323e661ff51245b50ce", null ],
          [ "irp_resources_t", "a00140.html#ga33d4a715b66b882a91fa88be73479a6f", null ]
        ] ],
        [ "Functions", "a00140.html", [
          [ "add_irp_asm", "a00140.html#ga3332be9ee7c65a2c12c15b41d8984c26", null ],
          [ "add_irp_irg", "a00140.html#ga6a79f644dfcc30cebb32236445b707b4", null ],
          [ "enable_irp_optimization_dumps", "a00140.html#ga90f771d6e30fa471e42364d444c063a0", null ],
          [ "free_ir_prog", "a00140.html#ga677d0fecca601914b4b3561ff4aa448e", null ],
          [ "get_const_code_irg", "a00140.html#ga16ae90b0488d6ba2c89afdca3b32c02b", null ],
          [ "get_glob_type", "a00140.html#ga9b42ac739acd3f2213ea3a9934f152cf", null ],
          [ "get_irp", "a00140.html#ga7e3561bac7da2e1e47fa56fe8b615739", null ],
          [ "get_irp_asm", "a00140.html#gadca464b4c9719275b0b3ed739eddbfbc", null ],
          [ "get_irp_callee_info_state", "a00140.html#ga1af9dac6fde65aef2f12cd526623e481", null ],
          [ "get_irp_ident", "a00140.html#ga881d08a330dea5be3bdc8d88534dd950", null ],
          [ "get_irp_irg", "a00140.html#ga6a33c36115654d75d34055f10801edc2", null ],
          [ "get_irp_last_idx", "a00140.html#ga94402f1a1642d48b7fb36d3899796394", null ],
          [ "get_irp_main_irg", "a00140.html#ga76375ed6fcb7ecbec09bbe8befd922a7", null ],
          [ "get_irp_n_asms", "a00140.html#ga697a7bcbd94d1033b23b4b03c50c9946", null ],
          [ "get_irp_n_irgs", "a00140.html#ga2daea97010aa376e76c8c7f5946a4193", null ],
          [ "get_irp_n_types", "a00140.html#ga9be13fac5ad463697f52b958973a81d2", null ],
          [ "get_irp_name", "a00140.html#ga7bfedc40b819d39ccdfb7bab8202b734", null ],
          [ "get_irp_next_label_nr", "a00140.html#ga0d4d963df74f31680e426eafbbef24c1", null ],
          [ "get_irp_optimization_dumps", "a00140.html#ga18ec93ef7ad18cfc79fbf26c47c508ce", null ],
          [ "get_irp_phase_state", "a00140.html#gac4209a5def8a56605b80483dfbc90f47", null ],
          [ "get_irp_type", "a00140.html#gaa65dc50dc942ce51fb73782e6ded0c16", null ],
          [ "get_segment_type", "a00140.html#ga63bd309d420fd2544bf3aad8c4e604cb", null ],
          [ "get_tls_type", "a00140.html#gadfa8dd897586c76c27d3720a313c6ee7", null ],
          [ "irp_free_resources", "a00140.html#ga70be927eec174e905a4ca0640a214850", null ],
          [ "irp_prog_name_is_set", "a00140.html#ga0b7eab9370d7bf14fe09b095d90ba047", null ],
          [ "irp_reserve_resources", "a00140.html#ga1baf7abb94c4fea32acfaf293df93a70", null ],
          [ "irp_resources_reserved", "a00140.html#ga22296fd2d078ee1a82ecde29ae946771", null ],
          [ "new_ir_prog", "a00140.html#gad0afc82e1f0dce21110d736378dcd6d8", null ],
          [ "remove_irp_irg", "a00140.html#gac6c25b3232d6603a1bdc84edbfaaebf0", null ],
          [ "remove_irp_irg_from_list", "a00140.html#gaad477433251bc2b26d9de77c07ac724e", null ],
          [ "set_irp", "a00140.html#ga311a09f4167bd2b9c0d24b0d50f37f4f", null ],
          [ "set_irp_callee_info_state", "a00140.html#ga5c254e318929bc592e475cb5b1767328", null ],
          [ "set_irp_irg", "a00140.html#gaedf6993b552aff7658d1f28b50f001de", null ],
          [ "set_irp_main_irg", "a00140.html#ga9bef5e6bed181a87a77877da47250f9d", null ],
          [ "set_irp_phase_state", "a00140.html#ga5b2bca37b6071591b453cf3e735db041", null ],
          [ "set_irp_phase_state_pass", "a00140.html#ga648c1d876cee25b636f885173bb8e483", null ],
          [ "set_irp_prog_name", "a00140.html#ga77d392aaf986823e69debcc43818215a", null ],
          [ "set_irp_type", "a00140.html#ga4f6047e826fc7a450d1a491b03e13ad8", null ],
          [ "set_segment_type", "a00140.html#gafc5b0f7e4112b9ac406be369606c690c", null ]
        ] ],
        [ "Variables", "a00140.html", [
          [ "irp", "a00140.html#ga4fd0aee7d26a28a0a07364ea018d687c", null ]
        ] ]
      ] ],
      [ "Correctness Tests", "a00141.html", [
        [ "Flags", "a00127.html", [
          [ "Enumerations", "a00127.html", [
            [ "firm_verification_t", "a00127.html#gad7333490ad37962ca99ea0e59d34a9e0", null ]
          ] ],
          [ "Functions", "a00127.html", [
            [ "do_node_verification", "a00127.html#ga12f98fa387c000ac51a382914936913d", null ]
          ] ]
        ] ],
        [ "Enumerations", "a00141.html", [
          [ "irg_verify_flags_t", "a00141.html#gae8b7ed477377683802482eb1c1ee2849", null ],
          [ "verify_bad_flags_t", "a00141.html#gae1f44ba94026acc91fae18172939e2d4", null ]
        ] ],
        [ "Functions", "a00141.html", [
          [ "irg_verify", "a00141.html#ga66861df2d70a4591278bf4642f5b2cf1", null ],
          [ "irg_verify_bads", "a00141.html#gad8ec01f87e950b8cc13cba4f9ceb71b0", null ],
          [ "irg_verify_pass", "a00141.html#ga0d44288f6c1c6c08979d267da8e6063e", null ],
          [ "irn_verify", "a00141.html#ga5647528322ed61c8cbac909067b9757d", null ],
          [ "irn_verify_irg", "a00141.html#ga43ec1852a21ecad2d1c6ed2e1199b365", null ],
          [ "irn_verify_irg_dump", "a00141.html#ga1634fa51b73ae7ceb96387e1aa7f9cc3", null ],
          [ "verify_enable_entity_tests", "a00141.html#ga88bc90340e1044295d76567675e330e7", null ]
        ] ]
      ] ],
      [ "Lowering", "a00142.html", [
        [ "Typedefs", "a00142.html", [
          [ "i_mapper_func", "a00142.html#ga6eb02560305e484e567bf0e18fc5d09c", null ],
          [ "lower_mux_callback", "a00142.html#gaa05811105eec571ced8e94d5ac712498", null ]
        ] ],
        [ "Enumerations", "a00142.html", [
          [ "ikind", "a00142.html#ga1c317ed879f70e0bae2b43a386db4fea", null ]
        ] ],
        [ "Functions", "a00142.html", [
          [ "i_mapper_abs", "a00142.html#ga25fae197800807e14e1a79e1e513d7fb", null ],
          [ "i_mapper_acos", "a00142.html#gafd1ce472be7d612deaa70e561177359f", null ],
          [ "i_mapper_alloca", "a00142.html#ga3289a679f5884fb8daa2ddc42bd6213c", null ],
          [ "i_mapper_asin", "a00142.html#gabfd802cb225f0dc8aaec05d75889a27d", null ],
          [ "i_mapper_atan", "a00142.html#ga490f722527c088330069b013cc2e6d20", null ],
          [ "i_mapper_bswap", "a00142.html#gae75ad8738bdbe6718fd52e9292f6c68c", null ],
          [ "i_mapper_cbrt", "a00142.html#ga8e168763a70f93392dff73bf5bd691f3", null ],
          [ "i_mapper_cos", "a00142.html#gac9e0c6e76dc820809b2719e9db1b165e", null ],
          [ "i_mapper_cosh", "a00142.html#ga9113cd61c7d5a4d1c26874e36c165763", null ],
          [ "i_mapper_exp", "a00142.html#ga3576cac0906fe15e4c4633081cbfb098", null ],
          [ "i_mapper_exp10", "a00142.html#ga679331365b66fbd739cc4ec917af6128", null ],
          [ "i_mapper_exp2", "a00142.html#gaab0bad5c25fc55a9777eee939f6f56d9", null ],
          [ "i_mapper_log", "a00142.html#ga67eff0e377b328d409896112edbddf18", null ],
          [ "i_mapper_log10", "a00142.html#ga85c84f218a2fdea64775b1d70261ef2b", null ],
          [ "i_mapper_log2", "a00142.html#ga219da838c8d409e139d84ef491216c7a", null ],
          [ "i_mapper_memcmp", "a00142.html#ga0f0434826c1cb1331fcf793de573863d", null ],
          [ "i_mapper_memcpy", "a00142.html#gaa6baa15686012e5976c146c53f86f82f", null ],
          [ "i_mapper_memmove", "a00142.html#gaebd3678460d308ac06f97b884cb6971f", null ],
          [ "i_mapper_mempcpy", "a00142.html#ga80e858a3d74a7af12a508e05a04c3225", null ],
          [ "i_mapper_memset", "a00142.html#ga35a916851a7424bcdcfec0eef976b2e2", null ],
          [ "i_mapper_pow", "a00142.html#ga6303e8fc53a63297f061a43ed4032c3c", null ],
          [ "i_mapper_RuntimeCall", "a00142.html#gabdb827644e46f6201c43872d4d13a725", null ],
          [ "i_mapper_sin", "a00142.html#ga9a37edc10d1a177265e8305fb01e4de2", null ],
          [ "i_mapper_sinh", "a00142.html#gaf18cd72210e8b041eb3320c7a6bec92a", null ],
          [ "i_mapper_sqrt", "a00142.html#gaad394d2c2ecec24e0bc9dc0723f5c74e", null ],
          [ "i_mapper_strcmp", "a00142.html#gaa53f51825d2800e32396b4a4f34582d1", null ],
          [ "i_mapper_strcpy", "a00142.html#ga1776592f97bf4813bcfc7e42094225f6", null ],
          [ "i_mapper_strlen", "a00142.html#ga8405cb7b3b744896bbf70fd6c717bfc5", null ],
          [ "i_mapper_strncmp", "a00142.html#ga6640767c83746d4e7499199c241fddf3", null ],
          [ "i_mapper_tan", "a00142.html#gaf9a671bb4b74bb88ead0e2eef310a3e4", null ],
          [ "i_mapper_tanh", "a00142.html#ga55e306aca276d77b4a99aaffa509fbf7", null ],
          [ "lower_const_code", "a00142.html#ga2d3a41ed4da8ecc1fe94a5b9684d3e0a", null ],
          [ "lower_const_code_pass", "a00142.html#gac1515a23b4d1366b698d3cdf894a9aa5", null ],
          [ "lower_CopyB", "a00142.html#gad5564b6c475bbf937d50d670d1318739", null ],
          [ "lower_highlevel", "a00142.html#ga70c954ef14f75735ace885397168c1ac", null ],
          [ "lower_highlevel_graph", "a00142.html#gaa36dbf9968fa13aa08b1477f32a668bb", null ],
          [ "lower_highlevel_graph_pass", "a00142.html#gaf651d9f608946ce7bb3e5c8291a39ac3", null ],
          [ "lower_intrinsics", "a00142.html#ga335c0f8b6bf0b07f65d270b45e24e153", null ],
          [ "lower_intrinsics_pass", "a00142.html#gaa0144afcf0a83bb5102eaaf42313d4c0", null ],
          [ "lower_mux", "a00142.html#ga15eb8b4782c2552c4be6e59192463499", null ],
          [ "lower_mux_pass", "a00142.html#ga554f37ce514a0f8018847d2d2d3b0806", null ],
          [ "lower_switch", "a00142.html#ga5575bdc00a677899d225809b6f62b591", null ]
        ] ],
        [ "Data Structures", "a00142.html", [
          [ "i_call_record", "a00007.html", null ],
          [ "i_instr_record", "a00008.html", null ],
          [ "i_record", "a00009.html", null ],
          [ "runtime_rt", "a00018.html", null ]
        ] ]
      ] ],
      [ "Target Machine Values", "a00200.html", [
        [ "Defines", "a00200.html", [
          [ "get_tarval_bottom", "a00200.html#ga366ca482432460588029d1908d4ad8c4", null ],
          [ "get_tarval_top", "a00200.html#gaac458656ede4807135ab505abe4eceef", null ],
          [ "tarval_bottom", "a00200.html#ga66c65e8663721f698237b3ae76ee0e31", null ],
          [ "tarval_top", "a00200.html#ga34c8438de81ea7cf0b8a61f5a351f63b", null ]
        ] ],
        [ "Typedefs", "a00200.html", [
          [ "ir_tarval", "a00200.html#ga264f66b5a3bfcca4dace7f3db21df093", null ]
        ] ],
        [ "Enumerations", "a00200.html", [
          [ "tarval_int_overflow_mode_t", "a00200.html#gaecfabba91f63097617856ed1818ad4ad", null ],
          [ "tv_output_mode", "a00200.html#ga6ac1950ba2a8cea9fdd299b62e2a2f65", null ]
        ] ],
        [ "Functions", "a00200.html", [
          [ "get_tarval_all_one", "a00200.html#ga9b512ddd262452ad06fc86e6d589a469", null ],
          [ "get_tarval_b_false", "a00200.html#ga3532eeee58a9247879c343b8ae22cdea", null ],
          [ "get_tarval_b_true", "a00200.html#ga1c709d5fe4b971cfe58b871a29d256d6", null ],
          [ "get_tarval_bad", "a00200.html#ga22d9acfea413ead47a4b8812156b63ee", null ],
          [ "get_tarval_bitpattern", "a00200.html#gaac0e2cdeaa91d751c22c560b17893a09", null ],
          [ "get_tarval_double", "a00200.html#ga2595f1fbbff33ce74d6d10fa32d94e77", null ],
          [ "get_tarval_long", "a00200.html#gaff3a600ccf3843ec21e2c2b8f36b2a6d", null ],
          [ "get_tarval_long_double", "a00200.html#gab49728958e1352407da85a10c0816ed4", null ],
          [ "get_tarval_lowest_bit", "a00200.html#gae6b6dc1730f04195054c4809b9c5a2f9", null ],
          [ "get_tarval_max", "a00200.html#gaefda86250c66d5659703ba719e5f311a", null ],
          [ "get_tarval_min", "a00200.html#ga79415489d4566a71fb03b63c065fc7fb", null ],
          [ "get_tarval_minus_inf", "a00200.html#ga6b7d1593e5b96cc037e1e03e619b1b43", null ],
          [ "get_tarval_minus_one", "a00200.html#gaf719c4db61c8b93ccea146f52cf6ff2d", null ],
          [ "get_tarval_mode", "a00200.html#ga4ea0a6c56816092938662739b079d42c", null ],
          [ "get_tarval_mode_output_option", "a00200.html#ga0412546a74038c7af218e82fa3f9dbd8", null ],
          [ "get_tarval_nan", "a00200.html#gae361fa2fdc2d446ad95bd7b7b95c8e05", null ],
          [ "get_tarval_null", "a00200.html#ga6746a3aa2fcf470473fc882c34e9114b", null ],
          [ "get_tarval_one", "a00200.html#ga1ad9729c4e223489b003bf292897c106", null ],
          [ "get_tarval_plus_inf", "a00200.html#gab23f8a343f6a2bde9bc9b64629d12cbb", null ],
          [ "get_tarval_popcount", "a00200.html#ga196ccd64966276bb31263584b02d44e2", null ],
          [ "get_tarval_reachable", "a00200.html#ga1e3b454c7e2f533cd0accd26f05bed57", null ],
          [ "get_tarval_sub_bits", "a00200.html#ga963d18b4853a0a50c71bc266776e666e", null ],
          [ "get_tarval_undefined", "a00200.html#ga4ea3c57e317c9f5843d42e9c56f44096", null ],
          [ "get_tarval_unreachable", "a00200.html#gaa01f0963fdd4abf9fd1ebd61caba80a1", null ],
          [ "is_tarval", "a00200.html#gaa146ff4a2a8324e54cd357197f6f6651", null ],
          [ "new_integer_tarval_from_str", "a00200.html#ga5ffe32624d28c2a26501552633929c95", null ],
          [ "new_tarval_from_double", "a00200.html#ga89ee67e08bc4739e7f04f0d875f70359", null ],
          [ "new_tarval_from_long", "a00200.html#ga1103fbc8a8874fa93e0f7ca276fb5293", null ],
          [ "new_tarval_from_long_double", "a00200.html#gad41a8377c3d625f7b15e3714baf49b33", null ],
          [ "new_tarval_from_str", "a00200.html#ga67a977f78e43f435d6fea55b0ea9e01f", null ],
          [ "set_tarval_mode_output_option", "a00200.html#ga9a34e4c055e9d2aa536edaf39df79c0f", null ],
          [ "tarval_abs", "a00200.html#ga78463e94c5a4ccf09c78af59f95a6add", null ],
          [ "tarval_add", "a00200.html#gaf79bc70945f5f45f8dbd3542fd696721", null ],
          [ "tarval_and", "a00200.html#gac473df1f73160269e49dbd9d66bfc9f9", null ],
          [ "tarval_andnot", "a00200.html#gac58212dcb16c66e48530f62587997669", null ],
          [ "tarval_carry", "a00200.html#ga371968b6b8129d152ba863c040c6ee84", null ],
          [ "tarval_cmp", "a00200.html#ga30c113c80e78a1a51a8555a99b439429", null ],
          [ "tarval_convert_to", "a00200.html#gad9849e2e3a11797c9f0b4f08341b940a", null ],
          [ "tarval_div", "a00200.html#gac1b48fdf0b2c8f9f0d79f89da22f7bc4", null ],
          [ "tarval_divmod", "a00200.html#ga07e0f9ea09db62f3323ba43dbe1a5f9c", null ],
          [ "tarval_enable_fp_ops", "a00200.html#ga3e2b6e1ff5f293ca19c571ecf4575b3b", null ],
          [ "tarval_eor", "a00200.html#ga41d45694633b92ee5032941412aa86c2", null ],
          [ "tarval_fp_ops_enabled", "a00200.html#gaa3cc51450c7d9bd256643a28f3a23841", null ],
          [ "tarval_get_exponent", "a00200.html#ga9df1ac77d3bde2181638ada90be933a0", null ],
          [ "tarval_get_integer_overflow_mode", "a00200.html#ga4c40204992cdb05a6551663689808a85", null ],
          [ "tarval_ieee754_can_conv_lossless", "a00200.html#ga45cf0a16db953c2297b359bbf5b4b11d", null ],
          [ "tarval_ieee754_get_exact", "a00200.html#ga17ce45007e0dc6a4a3f5bc1277d302c1", null ],
          [ "tarval_is_all_one", "a00200.html#ga54206bc5f9ccf82455ac3797339713ee", null ],
          [ "tarval_is_constant", "a00200.html#gafe8792f56e31b45853c913246df89b39", null ],
          [ "tarval_is_double", "a00200.html#gab4aab497369a1e6d790e7243c2834104", null ],
          [ "tarval_is_finite", "a00200.html#ga9d6cd49ac3c327c12d2593bccf497e6a", null ],
          [ "tarval_is_long", "a00200.html#ga0b27b66463707c554496f05031f49a9e", null ],
          [ "tarval_is_minus_inf", "a00200.html#gaa1d98c75a9a78a56ce091b95e1acd3ee", null ],
          [ "tarval_is_minus_one", "a00200.html#ga9c6edf025f205d95cdd8bee63f8c9e75", null ],
          [ "tarval_is_NaN", "a00200.html#ga9fa7f4d492b4f1b22b249c55915f2870", null ],
          [ "tarval_is_negative", "a00200.html#ga0594715e670b1125154d99542a945d99", null ],
          [ "tarval_is_null", "a00200.html#gaac2550bf402da5518164353e86ae3e18", null ],
          [ "tarval_is_one", "a00200.html#ga4eae39e749ff69986a91f1d03a53c1f2", null ],
          [ "tarval_is_plus_inf", "a00200.html#ga29ac19a08089bc32fbfc69d0aef8f4a3", null ],
          [ "tarval_is_single_bit", "a00200.html#gab01e624da233241b0f0942dcec43d44c", null ],
          [ "tarval_mod", "a00200.html#ga5447ae582ff9bca4f0b94598199447a6", null ],
          [ "tarval_mul", "a00200.html#ga7e24ad8debd7f6bb8cf50f22346e11bd", null ],
          [ "tarval_neg", "a00200.html#gaadd57dbf9a90615da8439e1ab05a1331", null ],
          [ "tarval_not", "a00200.html#ga9586cfbeee3aabcfb36968157992fa0f", null ],
          [ "tarval_or", "a00200.html#gaa427e419afe33aecbac8571602632785", null ],
          [ "tarval_printf", "a00200.html#ga8be75299daf75d3bca3afb64fa179e57", null ],
          [ "tarval_rotl", "a00200.html#ga97aaca0cdf7b296cf3df799e6694805a", null ],
          [ "tarval_set_integer_overflow_mode", "a00200.html#ga2883ddc26556ed0d960c19e415caa30f", null ],
          [ "tarval_shl", "a00200.html#gaa01d6b61dc4375a27484d59e05781762", null ],
          [ "tarval_shr", "a00200.html#ga3bc3dfe8205d2e40dc045d5c878f3ee8", null ],
          [ "tarval_shrs", "a00200.html#ga7e6dd5a2c05d603a07c2a58bfa89442d", null ],
          [ "tarval_snprintf", "a00200.html#ga8f5d419c999ccc73d49586ff7617608c", null ],
          [ "tarval_sub", "a00200.html#gaa1eb340868d3833c07fb827681f0104d", null ],
          [ "tarval_zero_mantissa", "a00200.html#gabf86757fbbe00b1d4fa580dd95a606f1", null ]
        ] ],
        [ "Variables", "a00200.html", [
          [ "tarval_b_false", "a00200.html#ga1017eccee42574e8bf19be31ffc9a028", null ],
          [ "tarval_b_true", "a00200.html#gad8277a69e06b4e35ada32e6a08df30a1", null ],
          [ "tarval_bad", "a00200.html#gad93d61061cd790bd0e8d6f0f2bcfb22d", null ],
          [ "tarval_reachable", "a00200.html#gaafdcae2485243f015902f0b907665760", null ],
          [ "tarval_undefined", "a00200.html#gaa65d7547bb3b75909a49d644ebff363e", null ],
          [ "tarval_unreachable", "a00200.html#gab8a6b00171572b17a7ac5d46ed1ef4a2", null ]
        ] ],
        [ "Data Structures", "a00200.html", [
          [ "tarval_mode_info", "a00021.html", null ]
        ] ]
      ] ],
      [ "Entities", "a00004.html", [
        [ "The Unknown entity", "a00004.html#unknown_entity", null ],
        [ "Entity Initializers", "a00201.html", [
          [ "Typedefs", "a00201.html", [
            [ "ir_initializer_t", "a00201.html#ga674ca576abe09e7f48dae78921692ad1", null ]
          ] ],
          [ "Enumerations", "a00201.html", [
            [ "ir_initializer_kind_t", "a00201.html#gaf30473cb79da9e68ea32152fd55c656f", null ]
          ] ],
          [ "Functions", "a00201.html", [
            [ "create_initializer_compound", "a00201.html#ga155125c121cda31efdcd573b4b9a0f3e", null ],
            [ "create_initializer_const", "a00201.html#gafc5097a3822816108d74d61cce16ed3f", null ],
            [ "create_initializer_tarval", "a00201.html#ga4bc24d0d710508fc7b8cedb3e2af449c", null ],
            [ "get_initializer_compound_n_entries", "a00201.html#ga6ac3a53afa4b682e82746b4f406465ac", null ],
            [ "get_initializer_compound_value", "a00201.html#ga6f57dccd197b24e79f19eb4169f230fd", null ],
            [ "get_initializer_const_value", "a00201.html#ga66d628f355e09d27b9f5165499aa6adb", null ],
            [ "get_initializer_kind", "a00201.html#ga36f81b9dfab7665376c0cb6e4c839a79", null ],
            [ "get_initializer_kind_name", "a00201.html#ga42b73b9521f8fac7af8b73d71125f125", null ],
            [ "get_initializer_null", "a00201.html#gad75303ba36ac63053c4d98e7d45f8b0c", null ],
            [ "get_initializer_tarval_value", "a00201.html#gaf4e81d7ad56208007f062566a5d014e7", null ],
            [ "set_initializer_compound_value", "a00201.html#gaa8447e0770d737c4512a1b6623628deb", null ]
          ] ]
        ] ],
        [ "Defines", "a00004.html", [
          [ "IR_VA_START_PARAMETER_NUMBER", "a00004.html#gac8b8c9dfadaae1196e7f7fb88d8b43bf", null ],
          [ "IR_VTABLE_NUM_NOT_SET", "a00004.html#ga9d63aa8bbdf1dd98b9881448ff62c156", null ]
        ] ],
        [ "Typedefs", "a00004.html", [
          [ "ir_entity", "a00004.html#ga432640a14055ee444ef07800073673de", null ]
        ] ],
        [ "Enumerations", "a00004.html", [
          [ "ir_allocation", "a00004.html#ga80e394b8e2f05a74f0de23f03db2e94d", null ],
          [ "ir_entity_usage", "a00004.html#gaa606670f4424ce965819d8639a46d920", null ],
          [ "ir_linkage", "a00004.html#gad802e783d5bff4598a0504e4ea7379aa", null ],
          [ "ir_peculiarity", "a00004.html#ga5ee7847d070e22db57e811b9c96bfdfa", null ],
          [ "ir_visibility", "a00004.html#ga2bdc29f7ee582796465273d98519ae43", null ]
        ] ],
        [ "Functions", "a00004.html", [
          [ "add_entity_additional_properties", "a00004.html#gae6be17109acade91ba83ab3a55c9dfb4", null ],
          [ "add_entity_linkage", "a00004.html#gaf3baded3c984246a516bcc1c473f9859", null ],
          [ "add_entity_overwrites", "a00004.html#ga6449afa4b6e2942cc3ba2866961c1e27", null ],
          [ "check_entity", "a00004.html#ga0e96dca9bb8d0d3aee3bf842f9be42ee", null ],
          [ "copy_const_value", "a00004.html#gae704da462d3c5ed9dcfbf35d37c3c816", null ],
          [ "copy_entity_name", "a00004.html#ga831916024eef454511e3510634af38e6", null ],
          [ "copy_entity_own", "a00004.html#gac2e19b270ff7eb0a6864a4cf37d83b77", null ],
          [ "entity_has_definition", "a00004.html#ga4f17933bad2daa672a88a7d05bee48ed", null ],
          [ "entity_has_ld_ident", "a00004.html#gaadca5ea6ada1a116fde9cb48735d6dff", null ],
          [ "entity_is_externally_visible", "a00004.html#ga23bf9d807bf5cd5755bd1e20c76efb1a", null ],
          [ "entity_not_visited", "a00004.html#gad21b0b576fcec998f2dbd7dc50ebf724", null ],
          [ "entity_visited", "a00004.html#ga514cef6c4c5e1e787cab751d65929129", null ],
          [ "free_entity", "a00004.html#ga1db5f77a152b1b7d67fa6034be46298e", null ],
          [ "get_align_name", "a00004.html#gabfbc7358a5261c6447b46520298316eb", null ],
          [ "get_atomic_ent_value", "a00004.html#gad0f4a2a5ed2a710d8382cf03eb965095", null ],
          [ "get_class_peculiarity", "a00004.html#gacffa2e995400488670fe1fd429021464", null ],
          [ "get_entity_additional_properties", "a00004.html#ga7f8362bb2816824e496338acd2a88231", null ],
          [ "get_entity_aligned", "a00004.html#gadaa836fd0b6d9ce074b0bad89565d0ee", null ],
          [ "get_entity_alignment", "a00004.html#ga1a4d867b95f9151bfd77ceb7ac038cbf", null ],
          [ "get_entity_allocation", "a00004.html#ga4dedc571d34cbb83460ecc310435e1f5", null ],
          [ "get_entity_dbg_info", "a00004.html#ga4055f44aaf02865ae5fa8fd42838aac3", null ],
          [ "get_entity_ident", "a00004.html#ga0a021c61bc6205b67aa07f9a667f62a8", null ],
          [ "get_entity_initializer", "a00004.html#ga584d14d18d5bd9433cbbcc151c3fdd66", null ],
          [ "get_entity_irg", "a00004.html#gafc34302cc13000f370fc61256184b385", null ],
          [ "get_entity_label", "a00004.html#gafa81f2e8aa30424a9c58047dd5572893", null ],
          [ "get_entity_ld_ident", "a00004.html#ga810ffd99e296ba3d6e515837489b751e", null ],
          [ "get_entity_ld_name", "a00004.html#gafdb2663f3820780788912c6c002e7441", null ],
          [ "get_entity_link", "a00004.html#ga5778e5e85e16c0b63e80016dea231580", null ],
          [ "get_entity_linkage", "a00004.html#ga02b2f12edcdb74a8d8bca4658a834898", null ],
          [ "get_entity_n_overwrites", "a00004.html#gaaab4aeff16af5a7be498c812515d4641", null ],
          [ "get_entity_n_overwrittenby", "a00004.html#ga25ca3cd9342ff2aa9d356bd42db65d1b", null ],
          [ "get_entity_name", "a00004.html#ga0a613b606544191e9fe731e4572bb44f", null ],
          [ "get_entity_nr", "a00004.html#gaed16251082d064773cd973702e3cb34c", null ],
          [ "get_entity_offset", "a00004.html#gada64f6cba33d4555bf3af3382ac76a76", null ],
          [ "get_entity_offset_bits_remainder", "a00004.html#gad119f711fc9e4f03887361919ae555d1", null ],
          [ "get_entity_overwrites", "a00004.html#ga2ffa0f1ab527847d484f11d30bd823c9", null ],
          [ "get_entity_overwrites_index", "a00004.html#ga2dd47d750fd816088354d89c1c9402fc", null ],
          [ "get_entity_overwrittenby", "a00004.html#ga709a87f3b70879de72cfd9626064a372", null ],
          [ "get_entity_overwrittenby_index", "a00004.html#ga02301255515f28e5c0cb4204f9209fe7", null ],
          [ "get_entity_owner", "a00004.html#gabaef73f19e35cfc6ec3d17caafddce65", null ],
          [ "get_entity_parameter_number", "a00004.html#gac001b0724c074fdb6951effb17bf0392", null ],
          [ "get_entity_peculiarity", "a00004.html#gac2bb50e2a812587a5fb286a505cd01d9", null ],
          [ "get_entity_repr_class", "a00004.html#ga909ec28875f9f513184c2cb8cd08610b", null ],
          [ "get_entity_type", "a00004.html#ga199c5771bc657d7785840f3b4c38cc74", null ],
          [ "get_entity_usage", "a00004.html#gaf35df9479783cbb9eb9e7d9c4ce5012b", null ],
          [ "get_entity_visibility", "a00004.html#ga797206742f82be61df67eb72fe5c5b24", null ],
          [ "get_entity_visited", "a00004.html#ga1ebad195c51f9bffed465fcc4fb7b47c", null ],
          [ "get_entity_volatility", "a00004.html#ga2bab30c49757002f9a4ad9536bf6fbb3", null ],
          [ "get_entity_vtable_number", "a00004.html#ga6166eb8ef156f7e95c6f332db0183cbc", null ],
          [ "get_unknown_entity", "a00004.html#gae6e45152b930f5cc874a4ea2a52946e1", null ],
          [ "get_volatility_name", "a00004.html#gaf1de0de5e910b3b27abbc5d80ef8eca7", null ],
          [ "has_entity_initializer", "a00004.html#ga29a5ee22212e758acf65c558ad5f0f1b", null ],
          [ "is_atomic_entity", "a00004.html#gadba48cb175d7ee568eaaf4d0f72f24dc", null ],
          [ "is_compound_entity", "a00004.html#ga22dc228d0618a56560339a975d2ee01a", null ],
          [ "is_entity", "a00004.html#ga446b245da50e878746aa85c32a38f592", null ],
          [ "is_entity_compiler_generated", "a00004.html#ga68bbfdf9b084452c4b61019e3c61c4e4", null ],
          [ "is_entity_final", "a00004.html#ga9f079b42368637db627d8dad674f4393", null ],
          [ "is_irn_const_expression", "a00004.html#ga5303f7549dd839a1fdd9285d8952428e", null ],
          [ "is_method_entity", "a00004.html#ga34d0407a84516114f0394410fdbb0b1d", null ],
          [ "is_parameter_entity", "a00004.html#ga0452a4f5b4aafbe46e4d1781363f338c", null ],
          [ "is_unknown_entity", "a00004.html#gab799101d031f9f508364ca7fce9d6720", null ],
          [ "mark_entity_visited", "a00004.html#ga3e69811abe3abd86af7972e30a27a2f3", null ],
          [ "new_d_entity", "a00004.html#ga48fb897c83b0b6720c96d5e493baebe9", null ],
          [ "new_d_parameter_entity", "a00004.html#gab696573e5f6f106359df0ec082be4ddf", null ],
          [ "new_entity", "a00004.html#ga2108b7090ed0bddc313bd71b8aedc139", null ],
          [ "new_parameter_entity", "a00004.html#gaef87ee5002147edd80b3ef2090369878", null ],
          [ "remove_entity_linkage", "a00004.html#ga51ddac22a9efd774fef30cabceccd185", null ],
          [ "remove_entity_overwrites", "a00004.html#gafbaa3218a7ddf92a42ba3819e2c1d394", null ],
          [ "remove_entity_overwrittenby", "a00004.html#gacd090d41e3d1bb0dd7113c01aed653b9", null ],
          [ "set_atomic_ent_value", "a00004.html#ga640f140861aa53dcf30a6164010dd6e9", null ],
          [ "set_class_peculiarity", "a00004.html#ga63b159f24073852aac88577e422bb6f9", null ],
          [ "set_entity_additional_properties", "a00004.html#gad27a6473ec11400efd14ba9ad934dd52", null ],
          [ "set_entity_aligned", "a00004.html#gaf1db28b41b6c7208cedfe9de09f31cb3", null ],
          [ "set_entity_alignment", "a00004.html#gac069ed205b9576e9fad685e6bdff2d6b", null ],
          [ "set_entity_allocation", "a00004.html#ga6d00d99bdbf8ef11714c4a904ecc1d01", null ],
          [ "set_entity_compiler_generated", "a00004.html#ga54745a5df3f04984d29a10fa2ea84105", null ],
          [ "set_entity_dbg_info", "a00004.html#ga027301b46aa4b3c044aa75a51c30cfc9", null ],
          [ "set_entity_final", "a00004.html#gabcb31bcab9957f4a92d35b307b35b8a9", null ],
          [ "set_entity_ident", "a00004.html#gabb9881e6a3cc063a24627b1f190a0d1d", null ],
          [ "set_entity_initializer", "a00004.html#ga81adee24de4264fb5b8d70512ae89251", null ],
          [ "set_entity_label", "a00004.html#gac94df1683a42d3a3c6a377e198da8ec1", null ],
          [ "set_entity_ld_ident", "a00004.html#ga1d27d538bc8364ff08fa1ec792140b72", null ],
          [ "set_entity_link", "a00004.html#ga84873281477ef71a7aaddc2415dbbaad", null ],
          [ "set_entity_linkage", "a00004.html#ga18c1adc9737c2626fcadc374f2e152ec", null ],
          [ "set_entity_offset", "a00004.html#ga8bf986d0771ff3b11d6265b9b900a4bf", null ],
          [ "set_entity_offset_bits_remainder", "a00004.html#ga3bb9db1838d5e7e5835d800a864bbd58", null ],
          [ "set_entity_overwrites", "a00004.html#ga88814f7bd0f0b8e2dc6b91de6cd58250", null ],
          [ "set_entity_overwrittenby", "a00004.html#ga3803273e0b79fa9ead15924aa6dfcc6d", null ],
          [ "set_entity_owner", "a00004.html#ga60fe21498cbf6a7123b6729df2e29414", null ],
          [ "set_entity_parameter_number", "a00004.html#gaefbfc0494225d6ae2e96e17ed75601a5", null ],
          [ "set_entity_peculiarity", "a00004.html#ga2e507ec4ce21c8ed87c2803265c95151", null ],
          [ "set_entity_type", "a00004.html#ga5753a6db5f6a5638b36b49591d004d7d", null ],
          [ "set_entity_usage", "a00004.html#ga21fa45b01edbda59e915547511110196", null ],
          [ "set_entity_visibility", "a00004.html#gaf05464cae6a6ec3dcad7280c6bf46b20", null ],
          [ "set_entity_visited", "a00004.html#gab75c6d11429d3c4ca51472393751a2b4", null ],
          [ "set_entity_volatility", "a00004.html#ga26ef4799675cba7046db2629a00ed403", null ],
          [ "set_entity_vtable_number", "a00004.html#ga4c0fbb5adaec308102413470852f115f", null ]
        ] ]
      ] ],
      [ "Type System", "a00202.html", [
        [ "Reverse Type Edges", "a00199.html", [
          [ "Functions", "a00199.html", [
            [ "compute_trouts", "a00199.html#ga46424de13274744f4b8634c72c3a2bec", null ],
            [ "free_trouts", "a00199.html#ga36f5bf636a29009dbad6c2c360eea1e1", null ],
            [ "get_class_n_downcasts", "a00199.html#gacfedcd06b698e4f900573e4e1abd8a1b", null ],
            [ "get_class_n_upcasts", "a00199.html#gab31d66200ea9ff27f6c408dbae56ae71", null ],
            [ "get_entity_access", "a00199.html#ga3732bd7f8222ca432b6063f40d1842ef", null ],
            [ "get_entity_n_accesses", "a00199.html#gaa5cb7ee08696eb2850f524e2ddf8a70c", null ],
            [ "get_entity_n_references", "a00199.html#ga3f4bccf970db60bbfb0822fa71cfa8bd", null ],
            [ "get_entity_reference", "a00199.html#ga0283e2cf2313334d6e088fc2649c0119", null ],
            [ "get_type_alloc", "a00199.html#ga99c84f4cbae97f83f0f02eaa4638d1f6", null ],
            [ "get_type_arraytype_of", "a00199.html#ga0d5eca1f7d88e829b8a7782043d24036", null ],
            [ "get_type_cast", "a00199.html#ga78a4883b4893c5e146f40ae302f016a7", null ],
            [ "get_type_n_allocs", "a00199.html#ga49f13fa6a1c360af71ef075df47635c6", null ],
            [ "get_type_n_arraytypes_of", "a00199.html#ga2a61b639cfc914ea14e6927b65737401", null ],
            [ "get_type_n_casts", "a00199.html#gaf22d875ee1f3f08fa707eb2afca9bce2", null ],
            [ "get_type_n_pointertypes_to", "a00199.html#ga445db1f5075447dbd683e00804eb22a7", null ],
            [ "get_type_pointertype_to", "a00199.html#ga22b32a6e7b5f894bf74275e80b9d33a1", null ]
          ] ]
        ] ],
        [ "Type Opcodes", "a00203.html", [
          [ "Typedefs", "a00203.html", [
            [ "tp_op", "a00203.html#ga1ca2238c85c794bc6c66438028c79de9", null ]
          ] ],
          [ "Enumerations", "a00203.html", [
            [ "tp_opcode", "a00203.html#ga5e8200f31821cd2b9d48dbe5abd42752", null ]
          ] ],
          [ "Functions", "a00203.html", [
            [ "get_tpop_code", "a00203.html#gabc3fe575b84a5c8c8fb187ba6cbccb14", null ],
            [ "get_tpop_name", "a00203.html#ga99fdffd12078754013cd7dac1e8f89d6", null ]
          ] ]
        ] ],
        [ "Class", "a00204.html", [
          [ "Defines", "a00204.html", [
            [ "INVALID_MEMBER_INDEX", "a00204.html#ga2bec570b84ac82de99e74f03b36846bf", null ]
          ] ],
          [ "Functions", "a00204.html", [
            [ "add_class_subtype", "a00204.html#ga2541732fe5640c33edafc277445d59ea", null ],
            [ "add_class_supertype", "a00204.html#ga275a1da3ff3e0148c5bc2cce34c7afad", null ],
            [ "get_class_ident", "a00204.html#ga386eb11759472b8bbdc11b559c294051", null ],
            [ "get_class_member", "a00204.html#ga50e9fecc9efb39bceecfd93fab2675aa", null ],
            [ "get_class_member_by_name", "a00204.html#gaf94d7931781b8ac4f99cc4073aae85fa", null ],
            [ "get_class_member_index", "a00204.html#ga363580258f6cb8be52e92a0dfb17e95e", null ],
            [ "get_class_n_members", "a00204.html#ga072395711e7123b0184fe73583181e52", null ],
            [ "get_class_n_subtypes", "a00204.html#gae474b92fe02fd08327e28fe66e70f82e", null ],
            [ "get_class_n_supertypes", "a00204.html#ga0525bd6119557d2039a3864d9d7ad7cc", null ],
            [ "get_class_name", "a00204.html#ga92763873791e52137d192b7a35d50433", null ],
            [ "get_class_subtype", "a00204.html#ga83d80b3ee2cfd0c9f9518c4be185fbcd", null ],
            [ "get_class_subtype_index", "a00204.html#gae3e696edda185edd0d27885d7a2ea653", null ],
            [ "get_class_supertype", "a00204.html#ga0ddb1b0201f7df246f01649a4fbdd0c2", null ],
            [ "get_class_supertype_index", "a00204.html#gae932bc62a9704d90c9593c0b00f8f73b", null ],
            [ "get_class_type_info", "a00204.html#ga2084c5c2e156d9377921bcdee0f512a0", null ],
            [ "get_class_vtable_size", "a00204.html#ga19e4918d6cb5e541f95c4c803be2ab87", null ],
            [ "get_tpop_class", "a00204.html#ga1a4571b357e225c0af0d43dc46e4a437", null ],
            [ "is_class_abstract", "a00204.html#gac57db25273497726f141fd3fb1d68826", null ],
            [ "is_class_final", "a00204.html#gaaf546495427ded9d7c1c3d8bd541191f", null ],
            [ "is_class_interface", "a00204.html#gacda698da5940b206a81fb53705b018ab", null ],
            [ "is_Class_type", "a00204.html#ga2d9be0b78f4a42f5b693fb57e7ec708c", null ],
            [ "new_d_type_class", "a00204.html#ga318011a48ab19db9807b147d811cf119", null ],
            [ "new_type_class", "a00204.html#ga6d34295cc14cf26cd67f29f28839ff40", null ],
            [ "remove_class_subtype", "a00204.html#gafa72439e7b0e447fbe9df1fc365ad589", null ],
            [ "remove_class_supertype", "a00204.html#gae2ae92945510e5a8dd83819e3a9cf248", null ],
            [ "set_class_abstract", "a00204.html#gadb8d202d6c94ef4380c982c81c361458", null ],
            [ "set_class_final", "a00204.html#gad9bdea139cfde4605ee078d156e1d259", null ],
            [ "set_class_interface", "a00204.html#gaff597ee37d973cf74749a7d00952b3c4", null ],
            [ "set_class_subtype", "a00204.html#gaa06dd3c8d5a4943019a3b30bbf3ec68e", null ],
            [ "set_class_supertype", "a00204.html#ga531b7e4171e5f4bc50a604c973f14856", null ],
            [ "set_class_type_info", "a00204.html#gafac1dc08ec9d1b205232985ac3899c51", null ],
            [ "set_class_vtable_size", "a00204.html#ga72cb4fa481dfb2db86e368e4033fcd34", null ]
          ] ],
          [ "Variables", "a00204.html", [
            [ "type_class", "a00204.html#gaf79632cda1c6524425b59d3c91899331", null ]
          ] ]
        ] ],
        [ "Struct", "a00205.html", [
          [ "Functions", "a00205.html", [
            [ "get_struct_ident", "a00205.html#ga84e65850ebace92743f32f9c6c2be3fe", null ],
            [ "get_struct_member", "a00205.html#ga5f477d0facf5af272809a441af5a05c9", null ],
            [ "get_struct_member_index", "a00205.html#ga40c75b59fea3cdc4ea3dd094cdc2ee7e", null ],
            [ "get_struct_n_members", "a00205.html#ga5585ac5694a65c2b3dbc3bc0fb3069a0", null ],
            [ "get_struct_name", "a00205.html#ga644aed7982925e767139581dc913069d", null ],
            [ "get_tpop_struct", "a00205.html#ga33d35f301aa6e42dec4a45408c7129c5", null ],
            [ "is_Struct_type", "a00205.html#gaba473874cbec24d5d43443d0eb96194b", null ],
            [ "new_d_type_struct", "a00205.html#ga1b75a1f69df21f89c772c6923954be44", null ],
            [ "new_type_struct", "a00205.html#gac4a40dc1765ec168447ac94e79f1a0e1", null ]
          ] ],
          [ "Variables", "a00205.html", [
            [ "type_struct", "a00205.html#gaee0da9b9ffdbca03306a3ce20fd1c447", null ]
          ] ]
        ] ],
        [ "Union", "a00206.html", [
          [ "Functions", "a00206.html", [
            [ "get_tpop_union", "a00206.html#ga43956e6bba3404848676471879d758bb", null ],
            [ "get_union_ident", "a00206.html#ga0778314897634f52123d0398062ccca8", null ],
            [ "get_union_member", "a00206.html#gaa1ee66d6f8c6d2240f2599ba24df24e2", null ],
            [ "get_union_member_index", "a00206.html#ga5fc9d676c68c6e5e76f9504036cb0b50", null ],
            [ "get_union_n_members", "a00206.html#ga3c269d627fda82b02927e6ba14ee9772", null ],
            [ "get_union_name", "a00206.html#gad24c208e57396aa6a623ddc4f9b05fdc", null ],
            [ "is_Union_type", "a00206.html#gaf411689b5a3dd0587dcba051854dc465", null ],
            [ "new_d_type_union", "a00206.html#gaeb0e33278c8f5edf46a780a08a89d4aa", null ],
            [ "new_type_union", "a00206.html#gabda60673a5630e0fa5a8e9a5c1e3c479", null ]
          ] ],
          [ "Variables", "a00206.html", [
            [ "type_union", "a00206.html#ga62e36d0e4a0f2e284c5a23f2058eab61", null ]
          ] ]
        ] ],
        [ "Method", "a00207.html", [
          [ "Defines", "a00207.html", [
            [ "cc_cdecl_set", "a00207.html#gaaab291bc9461c963bcb68ea546a76ac9", null ],
            [ "cc_fastcall_set", "a00207.html#gabbbc461c3ae61ba2571a8146e599f5f3", null ],
            [ "cc_stdcall_set", "a00207.html#ga429d0f2d69a53e28385cc79ac6bc939f", null ],
            [ "IS_CDECL", "a00207.html#ga2077cdc3daf3abbbfd2a78ae3f0b3bfd", null ],
            [ "IS_FASTCALL", "a00207.html#ga2f28f6571f3a0282bf27c1f586fc1d0a", null ],
            [ "IS_STDCALL", "a00207.html#ga02854ea837e5bf37d252d22a89186a52", null ],
            [ "SET_CDECL", "a00207.html#ga29557b90d3f6760e0970f4d751b8d1cf", null ],
            [ "SET_FASTCALL", "a00207.html#gabd1e32970edf63cc2fbe8dd29aad3da9", null ],
            [ "SET_STDCALL", "a00207.html#ga96c62f586005076e53444a2ce121921d", null ]
          ] ],
          [ "Enumerations", "a00207.html", [
            [ "calling_convention", "a00207.html#ga6ee6b816c5f2efb0fcc88268cc880b3f", null ],
            [ "ir_variadicity", "a00207.html#ga7f04826d65766c10ebe53571242df0cd", null ],
            [ "mtp_additional_properties", "a00207.html#ga7f9b9d4beb2438880b94362a62459692", null ]
          ] ],
          [ "Functions", "a00207.html", [
            [ "add_method_additional_properties", "a00207.html#gab06057b7e52913d3b9c016d3cb20efb0", null ],
            [ "get_method_additional_properties", "a00207.html#gad0f4e8ad4843f736cee6d2df75ecec16", null ],
            [ "get_method_calling_convention", "a00207.html#gaeb53fe94d87b31d45f8cab5d1f8b8347", null ],
            [ "get_method_n_params", "a00207.html#ga0cef5f6bb9511d17a6139d2b5a92d245", null ],
            [ "get_method_n_regparams", "a00207.html#gab58035955e04daea6ac8d904ce41174f", null ],
            [ "get_method_n_ress", "a00207.html#gaae02c574456cff3b3cdc8b6c47835796", null ],
            [ "get_method_param_type", "a00207.html#ga01b52eeb67753b9885dbd84a2fbb586e", null ],
            [ "get_method_res_type", "a00207.html#ga48590f64e5cf54c10e6403ea4d7bf672", null ],
            [ "get_method_variadicity", "a00207.html#gaf2962343b66bb4ad38a650ab9aea94b4", null ],
            [ "get_tpop_method", "a00207.html#gaf787e89412a371574a1ea2247ee60482", null ],
            [ "get_variadicity_name", "a00207.html#ga808c455fbca62bdb20aa633639e3b88d", null ],
            [ "is_Method_type", "a00207.html#gac3a10e17823d6c4267e08eaf08282cb9", null ],
            [ "new_d_type_method", "a00207.html#ga4a4acacb7f76c89907663b39633454d0", null ],
            [ "new_type_method", "a00207.html#gaac2a637848d358b80564c06531d143f3", null ],
            [ "set_method_additional_properties", "a00207.html#ga90b7b46e8f19bbe23ac7dbbc8eb046ac", null ],
            [ "set_method_calling_convention", "a00207.html#gac547351632333d65393a5197cd986191", null ],
            [ "set_method_n_regparams", "a00207.html#ga3ff38a0bfedf342896320ae16f648bdf", null ],
            [ "set_method_param_type", "a00207.html#gac48a1fedbce748976d2653894c54b365", null ],
            [ "set_method_res_type", "a00207.html#ga9683b397242ac24d7ca226095121a23f", null ],
            [ "set_method_variadicity", "a00207.html#gac56c53f9cd9a179572d3c1b7c653c526", null ]
          ] ],
          [ "Variables", "a00207.html", [
            [ "type_method", "a00207.html#ga15b8e6acdd00c61176b4aaa25963e367", null ]
          ] ]
        ] ],
        [ "Array", "a00208.html", [
          [ "Functions", "a00208.html", [
            [ "find_array_dimension", "a00208.html#ga1ced5975999c118b5085b0999841f208", null ],
            [ "get_array_element_entity", "a00208.html#ga3ca90e5fba1bbc667c9ea364c8240baf", null ],
            [ "get_array_element_type", "a00208.html#gaefe3a3dcc53edd273a762040f2f2831f", null ],
            [ "get_array_lower_bound", "a00208.html#ga524b03a10b6ebab67993cdf8b37fe220", null ],
            [ "get_array_lower_bound_int", "a00208.html#gae95801d7d47ed9dae69bcce65bc06ff3", null ],
            [ "get_array_n_dimensions", "a00208.html#ga27eab39b0cf1ed8f674c489efba4ddd7", null ],
            [ "get_array_order", "a00208.html#gaed3d3ee80b4e3c038799bb4570736440", null ],
            [ "get_array_upper_bound", "a00208.html#gae83906f8dfd0bce2ceb97cf9f3dd7232", null ],
            [ "get_array_upper_bound_int", "a00208.html#ga1837785d7b9e2d17ceeb1330c9deff87", null ],
            [ "get_tpop_array", "a00208.html#ga5ceffa910a874d7406275caba94ced73", null ],
            [ "has_array_lower_bound", "a00208.html#gad6cb8e76082f5f0e107485951128b06f", null ],
            [ "has_array_upper_bound", "a00208.html#gaa7e409246b65b5f5cd9d949fac1a188e", null ],
            [ "is_Array_type", "a00208.html#ga83563c44439a568abf0b07e80c70ca6e", null ],
            [ "new_d_type_array", "a00208.html#ga34931c1e9df26efdffc06639d5eefe49", null ],
            [ "new_type_array", "a00208.html#ga4335ce98130cc5a5cfd0fbcbf1e23ab2", null ],
            [ "set_array_bounds", "a00208.html#ga3542a5c25fe071bbd67bef6679408a4e", null ],
            [ "set_array_bounds_int", "a00208.html#gaf2c49a3172cf060259b86d6f5b400781", null ],
            [ "set_array_element_entity", "a00208.html#gaa6c8b9ba980ab342ee820311c783c1b4", null ],
            [ "set_array_element_type", "a00208.html#gaeca0b97a5a7cdb297d0a219c7337c92f", null ],
            [ "set_array_lower_bound", "a00208.html#gadc7f994a8df3de412b791b7b16aafa80", null ],
            [ "set_array_lower_bound_int", "a00208.html#gadc5fb7aee3c52b121999f1556f6bf939", null ],
            [ "set_array_order", "a00208.html#ga8ca7a1859fc8d45bc0f448c7e9c5230b", null ],
            [ "set_array_upper_bound", "a00208.html#gaddb5029f47d8dabf836176f69338c298", null ],
            [ "set_array_upper_bound_int", "a00208.html#ga6f58d71481b73fecaa2ecf181395508f", null ]
          ] ],
          [ "Variables", "a00208.html", [
            [ "type_array", "a00208.html#ga97c7728d99348fcb42bf0e43344b427d", null ]
          ] ]
        ] ],
        [ "Enumeration", "a00209.html", [
          [ "Typedefs", "a00209.html", [
            [ "ir_enum_const", "a00209.html#gab9002c31bb6411fff65390a3e282342a", null ]
          ] ],
          [ "Functions", "a00209.html", [
            [ "get_enumeration_const", "a00209.html#ga7b198b7688f9735041f09132f4d51259", null ],
            [ "get_enumeration_const_name", "a00209.html#gab2bdd19a03f10e7a2f58eecd1e942a84", null ],
            [ "get_enumeration_const_nameid", "a00209.html#gaf3cef2eeb8156c7ec43538ba6258afdc", null ],
            [ "get_enumeration_ident", "a00209.html#ga52dc179d74cb85a4fa6d8e0070728bf6", null ],
            [ "get_enumeration_n_enums", "a00209.html#ga52a92c9e33c42d7ab390874a69e0674b", null ],
            [ "get_enumeration_name", "a00209.html#ga2b68edd43270497d3a45e60730fc3d0d", null ],
            [ "get_enumeration_owner", "a00209.html#ga7dcd759f4aea65493e83aa71773625d9", null ],
            [ "get_enumeration_value", "a00209.html#ga110b164894a38a6742d34260b01b8ca5", null ],
            [ "get_tpop_enumeration", "a00209.html#ga0677484fde1d56994cd2a3b607854953", null ],
            [ "is_Enumeration_type", "a00209.html#gac169ac740da46a201b45cac307109178", null ],
            [ "new_d_type_enumeration", "a00209.html#ga503b4d023442bd0726417b17cc48caea", null ],
            [ "new_type_enumeration", "a00209.html#gab305885420cc1ae0f4f314d6aca546e6", null ],
            [ "set_enumeration_const", "a00209.html#gae643b5b1b5c07c2fbc1c90615ac45bf2", null ],
            [ "set_enumeration_nameid", "a00209.html#ga5ad2ee8437883435bb0580fa4a20359a", null ],
            [ "set_enumeration_value", "a00209.html#gac31f3834bafd6dd327dd05d704c59287", null ]
          ] ],
          [ "Variables", "a00209.html", [
            [ "type_enumeration", "a00209.html#ga834e25f2b614e012ef376bfd855c893c", null ]
          ] ]
        ] ],
        [ "Pointer", "a00210.html", [
          [ "Functions", "a00210.html", [
            [ "find_pointer_type_to_type", "a00210.html#gaa7b397ed5ddbf347ac03e99377f0c8e1", null ],
            [ "get_pointer_points_to_type", "a00210.html#ga269928fdde056bedf9c1b5f5a2170853", null ],
            [ "get_tpop_pointer", "a00210.html#ga449ef5123668edc81472183cd3893ead", null ],
            [ "is_Pointer_type", "a00210.html#ga4b3b6e8e472609141ca44cb119231b2a", null ],
            [ "new_d_type_pointer", "a00210.html#ga12177bb74f1be9d948441db47e35a37b", null ],
            [ "new_type_pointer", "a00210.html#ga6565d60932fe41b63b591e35d048cb5c", null ],
            [ "set_pointer_points_to_type", "a00210.html#gaede41b9a07411e33e504bbf0b23db7a2", null ]
          ] ],
          [ "Variables", "a00210.html", [
            [ "type_pointer", "a00210.html#gaa6ca29be1a7c102e2da3577b54853b55", null ]
          ] ]
        ] ],
        [ "Primitive", "a00211.html", [
          [ "Functions", "a00211.html", [
            [ "get_primitive_base_type", "a00211.html#ga16a595fea9a9bde44f226cc48ac55e69", null ],
            [ "get_tpop_primitive", "a00211.html#ga10d533b48c247aa629b91bd8c941256c", null ],
            [ "is_Primitive_type", "a00211.html#ga470e5d3d4e49377e9d3a3ee59c855331", null ],
            [ "new_d_type_primitive", "a00211.html#gad860aca888a93097e2181cbedc1c89e0", null ],
            [ "new_type_primitive", "a00211.html#gacdf7e2a5e920fbd1a9a77b6dd0bd6888", null ],
            [ "set_primitive_base_type", "a00211.html#ga3528949c6e7aa1f233a0b7db3b53a042", null ]
          ] ],
          [ "Variables", "a00211.html", [
            [ "type_primitive", "a00211.html#gadf4ad4976c1b253d9c40532027342686", null ]
          ] ]
        ] ],
        [ "None", "a00212.html", [
          [ "Functions", "a00212.html", [
            [ "get_none_type", "a00212.html#ga18598ef318822554fafaac5f17806dec", null ],
            [ "get_tpop_none", "a00212.html#gaa51b97e1c1cc595fd4532ba1cc5b3efc", null ],
            [ "is_none_type", "a00212.html#ga209b445eff79a6340ed20b6c8935f614", null ]
          ] ],
          [ "Variables", "a00212.html", [
            [ "tpop_none", "a00212.html#gabd80cc52f8feeab0f7c1a105dd8d71b3", null ]
          ] ]
        ] ],
        [ "Code", "a00213.html", [
          [ "Functions", "a00213.html", [
            [ "get_code_type", "a00213.html#gad0d0f94c5a8c4d1f7d632d8c56983c70", null ],
            [ "get_tpop_code_type", "a00213.html#gabaa759b741ec8eb25fd39f80ae545b48", null ],
            [ "is_code_type", "a00213.html#gae8e495cfce027b78127881675f6a24e0", null ]
          ] ],
          [ "Variables", "a00213.html", [
            [ "tpop_code", "a00213.html#ga737b4e6e993ffe53cd95932622e62d61", null ]
          ] ]
        ] ],
        [ "Unknown", "a00214.html", [
          [ "Functions", "a00214.html", [
            [ "get_tpop_unknown", "a00214.html#gad25b03526f12f326abee71ecc66cfd30", null ],
            [ "get_unknown_type", "a00214.html#ga9608abd5b41a09302f5ae442478a6d16", null ],
            [ "is_unknown_type", "a00214.html#gab240f58393eda63ef3b51e289b9ee961", null ]
          ] ],
          [ "Variables", "a00214.html", [
            [ "tpop_unknown", "a00214.html#ga5ddffd791225d6e74882e185cc5d09ec", null ]
          ] ]
        ] ],
        [ "Compound", "a00215.html", [
          [ "Class", "a00204.html", [
            [ "Defines", "a00204.html", [
              [ "INVALID_MEMBER_INDEX", "a00204.html#ga2bec570b84ac82de99e74f03b36846bf", null ]
            ] ],
            [ "Functions", "a00204.html", [
              [ "add_class_subtype", "a00204.html#ga2541732fe5640c33edafc277445d59ea", null ],
              [ "add_class_supertype", "a00204.html#ga275a1da3ff3e0148c5bc2cce34c7afad", null ],
              [ "get_class_ident", "a00204.html#ga386eb11759472b8bbdc11b559c294051", null ],
              [ "get_class_member", "a00204.html#ga50e9fecc9efb39bceecfd93fab2675aa", null ],
              [ "get_class_member_by_name", "a00204.html#gaf94d7931781b8ac4f99cc4073aae85fa", null ],
              [ "get_class_member_index", "a00204.html#ga363580258f6cb8be52e92a0dfb17e95e", null ],
              [ "get_class_n_members", "a00204.html#ga072395711e7123b0184fe73583181e52", null ],
              [ "get_class_n_subtypes", "a00204.html#gae474b92fe02fd08327e28fe66e70f82e", null ],
              [ "get_class_n_supertypes", "a00204.html#ga0525bd6119557d2039a3864d9d7ad7cc", null ],
              [ "get_class_name", "a00204.html#ga92763873791e52137d192b7a35d50433", null ],
              [ "get_class_subtype", "a00204.html#ga83d80b3ee2cfd0c9f9518c4be185fbcd", null ],
              [ "get_class_subtype_index", "a00204.html#gae3e696edda185edd0d27885d7a2ea653", null ],
              [ "get_class_supertype", "a00204.html#ga0ddb1b0201f7df246f01649a4fbdd0c2", null ],
              [ "get_class_supertype_index", "a00204.html#gae932bc62a9704d90c9593c0b00f8f73b", null ],
              [ "get_class_type_info", "a00204.html#ga2084c5c2e156d9377921bcdee0f512a0", null ],
              [ "get_class_vtable_size", "a00204.html#ga19e4918d6cb5e541f95c4c803be2ab87", null ],
              [ "get_tpop_class", "a00204.html#ga1a4571b357e225c0af0d43dc46e4a437", null ],
              [ "is_class_abstract", "a00204.html#gac57db25273497726f141fd3fb1d68826", null ],
              [ "is_class_final", "a00204.html#gaaf546495427ded9d7c1c3d8bd541191f", null ],
              [ "is_class_interface", "a00204.html#gacda698da5940b206a81fb53705b018ab", null ],
              [ "is_Class_type", "a00204.html#ga2d9be0b78f4a42f5b693fb57e7ec708c", null ],
              [ "new_d_type_class", "a00204.html#ga318011a48ab19db9807b147d811cf119", null ],
              [ "new_type_class", "a00204.html#ga6d34295cc14cf26cd67f29f28839ff40", null ],
              [ "remove_class_subtype", "a00204.html#gafa72439e7b0e447fbe9df1fc365ad589", null ],
              [ "remove_class_supertype", "a00204.html#gae2ae92945510e5a8dd83819e3a9cf248", null ],
              [ "set_class_abstract", "a00204.html#gadb8d202d6c94ef4380c982c81c361458", null ],
              [ "set_class_final", "a00204.html#gad9bdea139cfde4605ee078d156e1d259", null ],
              [ "set_class_interface", "a00204.html#gaff597ee37d973cf74749a7d00952b3c4", null ],
              [ "set_class_subtype", "a00204.html#gaa06dd3c8d5a4943019a3b30bbf3ec68e", null ],
              [ "set_class_supertype", "a00204.html#ga531b7e4171e5f4bc50a604c973f14856", null ],
              [ "set_class_type_info", "a00204.html#gafac1dc08ec9d1b205232985ac3899c51", null ],
              [ "set_class_vtable_size", "a00204.html#ga72cb4fa481dfb2db86e368e4033fcd34", null ]
            ] ],
            [ "Variables", "a00204.html", [
              [ "type_class", "a00204.html#gaf79632cda1c6524425b59d3c91899331", null ]
            ] ]
          ] ],
          [ "Struct", "a00205.html", [
            [ "Functions", "a00205.html", [
              [ "get_struct_ident", "a00205.html#ga84e65850ebace92743f32f9c6c2be3fe", null ],
              [ "get_struct_member", "a00205.html#ga5f477d0facf5af272809a441af5a05c9", null ],
              [ "get_struct_member_index", "a00205.html#ga40c75b59fea3cdc4ea3dd094cdc2ee7e", null ],
              [ "get_struct_n_members", "a00205.html#ga5585ac5694a65c2b3dbc3bc0fb3069a0", null ],
              [ "get_struct_name", "a00205.html#ga644aed7982925e767139581dc913069d", null ],
              [ "get_tpop_struct", "a00205.html#ga33d35f301aa6e42dec4a45408c7129c5", null ],
              [ "is_Struct_type", "a00205.html#gaba473874cbec24d5d43443d0eb96194b", null ],
              [ "new_d_type_struct", "a00205.html#ga1b75a1f69df21f89c772c6923954be44", null ],
              [ "new_type_struct", "a00205.html#gac4a40dc1765ec168447ac94e79f1a0e1", null ]
            ] ],
            [ "Variables", "a00205.html", [
              [ "type_struct", "a00205.html#gaee0da9b9ffdbca03306a3ce20fd1c447", null ]
            ] ]
          ] ],
          [ "Union", "a00206.html", [
            [ "Functions", "a00206.html", [
              [ "get_tpop_union", "a00206.html#ga43956e6bba3404848676471879d758bb", null ],
              [ "get_union_ident", "a00206.html#ga0778314897634f52123d0398062ccca8", null ],
              [ "get_union_member", "a00206.html#gaa1ee66d6f8c6d2240f2599ba24df24e2", null ],
              [ "get_union_member_index", "a00206.html#ga5fc9d676c68c6e5e76f9504036cb0b50", null ],
              [ "get_union_n_members", "a00206.html#ga3c269d627fda82b02927e6ba14ee9772", null ],
              [ "get_union_name", "a00206.html#gad24c208e57396aa6a623ddc4f9b05fdc", null ],
              [ "is_Union_type", "a00206.html#gaf411689b5a3dd0587dcba051854dc465", null ],
              [ "new_d_type_union", "a00206.html#gaeb0e33278c8f5edf46a780a08a89d4aa", null ],
              [ "new_type_union", "a00206.html#gabda60673a5630e0fa5a8e9a5c1e3c479", null ]
            ] ],
            [ "Variables", "a00206.html", [
              [ "type_union", "a00206.html#ga62e36d0e4a0f2e284c5a23f2058eab61", null ]
            ] ]
          ] ],
          [ "Functions", "a00215.html", [
            [ "default_layout_compound_type", "a00215.html#ga38c05fc3d617681cb8dbdbd1445d37ff", null ],
            [ "get_compound_ident", "a00215.html#ga1873d108c838c5d80676fcf1c0505f47", null ],
            [ "get_compound_member", "a00215.html#ga3bbfa90f2c266acf9742ab2560edd134", null ],
            [ "get_compound_member_index", "a00215.html#ga09c85a1ed615a1dca174af83c73d04a7", null ],
            [ "get_compound_n_members", "a00215.html#ga2fa0dbb08200aa9bcae9a18f29236e89", null ],
            [ "get_compound_name", "a00215.html#ga6ec73d6419c9e4960b69270510f586bb", null ],
            [ "is_compound_type", "a00215.html#ga7d9424607b4c78997869f113b388439c", null ],
            [ "remove_compound_member", "a00215.html#ga9c8473ccaa0ca15254b450f7cbb9ad42", null ]
          ] ]
        ] ],
        [ "Frame", "a00216.html", [
          [ "Functions", "a00216.html", [
            [ "clone_frame_type", "a00216.html#gaec4b86b842891ec6b8a0249a4f2a1b09", null ],
            [ "frame_alloc_area", "a00216.html#ga57dcf25d482596becf35cd16dd85100f", null ],
            [ "is_frame_type", "a00216.html#gaa98d9f2ecafadfdf55c268fa5d4d6364", null ],
            [ "new_type_frame", "a00216.html#ga4d7cefb1d6f1b976912cede8eb000060", null ]
          ] ]
        ] ],
        [ "Traversing", "a00217.html", [
          [ "Typedefs", "a00217.html", [
            [ "class_walk_func", "a00217.html#ga07d9728f3bffd88516ded66fdf337fc1", null ],
            [ "compare_types_func_t", "a00217.html#gac2d00c0bbd5d751a195ba2bccc691066", null ],
            [ "entity_walk_func", "a00217.html#gaea88ba56ba79945f52c35ce2d12329b3", null ],
            [ "type_walk_func", "a00217.html#gafa6752f90848c84695507abeb2802f4e", null ]
          ] ],
          [ "Functions", "a00217.html", [
            [ "class_walk_super2sub", "a00217.html#ga0d171ba787656c84a5b11b37fe78a71f", null ],
            [ "get_type_visibility", "a00217.html#gacf4b5631a15db94350a664d9153a5dce", null ],
            [ "set_type_visibility", "a00217.html#ga2ad52c6b5a6c0ae40661afa8b7ee41aa", null ],
            [ "type_walk", "a00217.html#ga7e29ae87e573f9fe32a1809a8d1c0885", null ],
            [ "type_walk_irg", "a00217.html#gaeb98618787a4c2145abf49ea1bf70d52", null ],
            [ "type_walk_super", "a00217.html#ga604cb2a606776cf91f89ebd0e400a2ed", null ],
            [ "type_walk_super2sub", "a00217.html#gabe111acc2625d7183977af8c429737dd", null ],
            [ "types_calc_finalization", "a00217.html#ga7401b5ad83d0977936880fba6b40d599", null ],
            [ "walk_types_entities", "a00217.html#ga352ceff4a4f8c0d3d7a098b59bb7fca9", null ]
          ] ],
          [ "Data Structures", "a00217.html", [
            [ "type_or_ent", "a00022.html", null ]
          ] ]
        ] ],
        [ "Defines", "a00202.html", [
          [ "is_SuperClass_of", "a00202.html#ga102a4e613c30d7b6f619451eae9c8297", null ],
          [ "is_SuperClass_ptr_of", "a00202.html#gaa57268250245581d07202dba4f5dc9e2", null ]
        ] ],
        [ "Typedefs", "a00202.html", [
          [ "ir_type", "a00202.html#ga5b364a10caee62083a7247148e510de8", null ],
          [ "mangle_inherited_name_func", "a00202.html#gab69000d0f5a06084bbebad4d0f808260", null ]
        ] ],
        [ "Enumerations", "a00202.html", [
          [ "inh_transitive_closure_state", "a00202.html#gae765957e7685c3dd8a1d4697dbecaf12", null ],
          [ "ir_class_cast_state", "a00202.html#gae9a2d2f4571659572f8891d69780fcd0", null ],
          [ "ir_type_state", "a00202.html#gafe39f03b8c3fb57a4c60da910d1bc120", null ],
          [ "trverify_error_codes", "a00202.html#ga8dd8d9e28e3be572022e577bb2a07791", null ]
        ] ],
        [ "Functions", "a00202.html", [
          [ "check_type", "a00202.html#ga99bd5578281bc17470612dc6c9933106", null ],
          [ "compute_inh_transitive_closure", "a00202.html#ga27d16383ec081f3a2567924ca1e89af0", null ],
          [ "default_mangle_inherited_name", "a00202.html#gad101f6caa066705b15fab7060ae18cbe", null ],
          [ "equal_type", "a00202.html#ga4c045fba9dae4c2e5166ca491ae1b610", null ],
          [ "free_inh_transitive_closure", "a00202.html#ga6a20f7c15b678d852961d0cb4f051f6c", null ],
          [ "free_type", "a00202.html#gae5eb65b6cd58eb2fc75c8ef059662bbf", null ],
          [ "get_class_trans_subtype_first", "a00202.html#gaf9ad15e24c1119767f2809df5ec8b46b", null ],
          [ "get_class_trans_subtype_next", "a00202.html#ga37fc7371e55d337890041294aa592146", null ],
          [ "get_class_trans_supertype_first", "a00202.html#gaffb8e8af7e1d5025cbed23b833e91414", null ],
          [ "get_class_trans_supertype_next", "a00202.html#ga59f32011da7d1ea79084f06ef8cb5fdb", null ],
          [ "get_entity_trans_overwrites_first", "a00202.html#gab275dd104b947f651d166ab83df3327e", null ],
          [ "get_entity_trans_overwrites_next", "a00202.html#gac357442f3d4c844cce8202d25238d21b", null ],
          [ "get_entity_trans_overwrittenby_first", "a00202.html#gaf11e5ccb4184a7bb5ae2dcbacdcf83c8", null ],
          [ "get_entity_trans_overwrittenby_next", "a00202.html#ga9266a28d085bd93f6071e6b7fec5e971", null ],
          [ "get_irg_class_cast_state", "a00202.html#ga384bcf7cc88357b7ee0ba91583859849", null ],
          [ "get_irp_class_cast_state", "a00202.html#ga95c141a4ad2e7f472bda23df1db2a3eb", null ],
          [ "get_irp_inh_transitive_closure_state", "a00202.html#gaf33fcadb82ce8e270f883b9eb7cac9c0", null ],
          [ "get_master_type_visited", "a00202.html#gadd05dbef3a4e4c962d1567123140442d", null ],
          [ "get_type_alignment_bytes", "a00202.html#gab96842d6c71c2298ba71f18b5c217b42", null ],
          [ "get_type_dbg_info", "a00202.html#ga838e45ab04c14274ea23acd4f1d431b8", null ],
          [ "get_type_link", "a00202.html#ga3b0c9c9ec8d5a5ce82de359c6de51a9d", null ],
          [ "get_type_mode", "a00202.html#ga51b342b998da73f43e5bef27330d52bb", null ],
          [ "get_type_nr", "a00202.html#gaaa2cff5265585ccae143da7af1f27574", null ],
          [ "get_type_size_bytes", "a00202.html#gaa1366e1fef982d9ea076d2bc7bd091fc", null ],
          [ "get_type_state", "a00202.html#gabd95acf52505f518c1f2c3c84edfe4f9", null ],
          [ "get_type_state_name", "a00202.html#gad08c97f42d1943b24e0125500f5b1f89", null ],
          [ "get_type_tpop", "a00202.html#ga1345b0842a406033bbca43983aac0911", null ],
          [ "get_type_tpop_code", "a00202.html#ga130cac3cfb8e50dc732f3426f8a1b16d", null ],
          [ "get_type_tpop_name", "a00202.html#ga76ded96b35957a281009ad5a0a5585ca", null ],
          [ "get_type_tpop_nameid", "a00202.html#ga78d37dbb4e2268f1ccb8fd20a87e8796", null ],
          [ "get_type_visited", "a00202.html#ga3ae94fcd0bcf041ebc86534aaad1f3f9", null ],
          [ "inc_master_type_visited", "a00202.html#ga8e2925a2e898b464933e34edb1fd64ed", null ],
          [ "invalidate_irp_inh_transitive_closure_state", "a00202.html#gaa2e917b256d82522ee7e6a6d2f80b265", null ],
          [ "ir_print_type", "a00202.html#ga484fbb41a6c1b74177a97e414b501220", null ],
          [ "is_atomic_type", "a00202.html#ga4cf3ba4c56554c10579c5de11f7a5a2d", null ],
          [ "is_class_trans_subtype", "a00202.html#ga41c0e5b73288078e58f43763b1b3ec7f", null ],
          [ "is_overwritten_by", "a00202.html#ga04904040f3a16a740150af3bc1f3b0bb", null ],
          [ "is_SubClass_of", "a00202.html#ga5dfe6fa09581607fce69f5a9294771fb", null ],
          [ "is_SubClass_ptr_of", "a00202.html#ga2b0b65fe6c45895268a224c9b8f85854", null ],
          [ "is_type", "a00202.html#gac5e0506b5a367bd1ae1556b0210ec752", null ],
          [ "mark_type_visited", "a00202.html#gae8fd748f6d5580ea9d31a1331c4b9177", null ],
          [ "resolve_ent_polymorphy", "a00202.html#ga9f3926ad411cd320f2154c8089c508a0", null ],
          [ "resolve_inheritance", "a00202.html#gafe8e27b1a2726873a48cd44d5a3305af", null ],
          [ "set_irg_class_cast_state", "a00202.html#gab52b7d40ebdf51c46583bd6acd99735f", null ],
          [ "set_irp_class_cast_state", "a00202.html#ga56a8c7b99682f9d71d5e712f6a995148", null ],
          [ "set_irp_inh_transitive_closure_state", "a00202.html#ga16754131c6251ed7edd1a9987e7b7a6b", null ],
          [ "set_master_type_visited", "a00202.html#gab73d330c8818a61770cf403b04ce7772", null ],
          [ "set_type_alignment_bytes", "a00202.html#gaab953918c2b268c61844ec3db1566b90", null ],
          [ "set_type_dbg_info", "a00202.html#gaab3149e6a0a0460f81442777b7bc302b", null ],
          [ "set_type_link", "a00202.html#ga447a11d49ffcef322fb1f99802c0d077", null ],
          [ "set_type_mode", "a00202.html#ga3f24db0f65e7e6a0e2fec87b179314b7", null ],
          [ "set_type_size_bytes", "a00202.html#ga1b908d9051b44473d990a314454be747", null ],
          [ "set_type_state", "a00202.html#ga5e99b5b80a5860d7e83f5d3117dec68a", null ],
          [ "set_type_visited", "a00202.html#ga2376e81d9dbc2cd24e989b6b16b3555e", null ],
          [ "smaller_type", "a00202.html#ga725b5125cf6741f70ee34566eb3154f3", null ],
          [ "tr_verify", "a00202.html#ga644579129332f5be6c17ac058f12b7f7", null ],
          [ "type_not_visited", "a00202.html#gaa0f928ed8164834998f8a2fbef6e7947", null ],
          [ "type_visited", "a00202.html#ga2dc2f54709325bd2fc70585dbc7e57ca", null ]
        ] ]
      ] ]
    ] ],
    [ "Data Structures", "annotated.html", [
      [ "backend_params", "a00005.html", null ],
      [ "hook_entry_t", "a00006.html", null ],
      [ "i_call_record", "a00007.html", null ],
      [ "i_instr_record", "a00008.html", null ],
      [ "i_record", "a00009.html", null ],
      [ "ir_asm_constraint", "a00010.html", null ],
      [ "ir_op_ops", "a00011.html", null ],
      [ "ir_settings_arch_dep_t", "a00012.html", null ],
      [ "loop_element", "a00013.html", null ],
      [ "plist_element_t", "a00014.html", null ],
      [ "plist_t", "a00015.html", null ],
      [ "pmap_entry", "a00016.html", null ],
      [ "pset_entry", "a00017.html", null ],
      [ "runtime_rt", "a00018.html", null ],
      [ "set_entry", "a00019.html", null ],
      [ "symconst_symbol", "a00020.html", null ],
      [ "tarval_mode_info", "a00021.html", null ],
      [ "type_or_ent", "a00022.html", null ],
      [ "vrp_attr", "a00023.html", null ]
    ] ],
    [ "Data Structure Index", "classes.html", null ],
    [ "Data Fields", "functions.html", null ],
    [ "File List", "files.html", [
      [ "libfirm/analyze_irg_args.h", "a00044.html", null ],
      [ "libfirm/be.h", "a00045.html", null ],
      [ "libfirm/begin.h", "a00046.html", null ],
      [ "libfirm/callgraph.h", "a00047.html", null ],
      [ "libfirm/cdep.h", "a00048.html", null ],
      [ "libfirm/cgana.h", "a00049.html", null ],
      [ "libfirm/compound_path.h", "a00050.html", null ],
      [ "libfirm/dbginfo.h", "a00051.html", null ],
      [ "libfirm/end.h", "a00052.html", null ],
      [ "libfirm/execfreq.h", "a00053.html", null ],
      [ "libfirm/firm.h", "a00054.html", null ],
      [ "libfirm/firm_common.h", "a00055.html", null ],
      [ "libfirm/firm_types.h", "a00056.html", null ],
      [ "libfirm/firmstat.h", "a00057.html", null ],
      [ "libfirm/heights.h", "a00058.html", null ],
      [ "libfirm/ident.h", "a00059.html", null ],
      [ "libfirm/irarch.h", "a00060.html", null ],
      [ "libfirm/ircgopt.h", "a00061.html", null ],
      [ "libfirm/ircons.h", "a00062.html", null ],
      [ "libfirm/irconsconfirm.h", "a00063.html", null ],
      [ "libfirm/irdom.h", "a00064.html", null ],
      [ "libfirm/irdump.h", "a00065.html", null ],
      [ "libfirm/iredgekinds.h", "a00066.html", null ],
      [ "libfirm/iredges.h", "a00067.html", null ],
      [ "libfirm/irextbb.h", "a00068.html", null ],
      [ "libfirm/irflag.h", "a00069.html", null ],
      [ "libfirm/irgmod.h", "a00070.html", null ],
      [ "libfirm/irgopt.h", "a00071.html", null ],
      [ "libfirm/irgraph.h", "a00072.html", null ],
      [ "libfirm/irgwalk.h", "a00073.html", null ],
      [ "libfirm/irhooks.h", "a00074.html", null ],
      [ "libfirm/irio.h", "a00075.html", null ],
      [ "libfirm/irloop.h", "a00076.html", null ],
      [ "libfirm/irmemory.h", "a00077.html", null ],
      [ "libfirm/irmode.h", "a00078.html", null ],
      [ "libfirm/irnode.h", "a00079.html", null ],
      [ "libfirm/irop.h", "a00080.html", null ],
      [ "libfirm/iropt.h", "a00081.html", null ],
      [ "libfirm/iroptimize.h", "a00082.html", null ],
      [ "libfirm/irouts.h", "a00083.html", null ],
      [ "libfirm/irpass.h", "a00084.html", null ],
      [ "libfirm/irprintf.h", "a00085.html", null ],
      [ "libfirm/irprog.h", "a00086.html", null ],
      [ "libfirm/irtypeinfo.h", "a00087.html", null ],
      [ "libfirm/irverify.h", "a00088.html", null ],
      [ "libfirm/lowering.h", "a00089.html", null ],
      [ "libfirm/nodeops.h", null, null ],
      [ "libfirm/opcodes.h", null, null ],
      [ "libfirm/timing.h", "a00092.html", null ],
      [ "libfirm/trouts.h", "a00093.html", null ],
      [ "libfirm/tv.h", "a00094.html", null ],
      [ "libfirm/typerep.h", "a00095.html", null ],
      [ "libfirm/vrp.h", "a00096.html", null ],
      [ "libfirm/adt/array.h", "a00024.html", null ],
      [ "libfirm/adt/bipartite.h", "a00025.html", null ],
      [ "libfirm/adt/cpset.h", "a00026.html", null ],
      [ "libfirm/adt/gaussjordan.h", "a00027.html", null ],
      [ "libfirm/adt/gaussseidel.h", null, null ],
      [ "libfirm/adt/hashptr.h", "a00029.html", null ],
      [ "libfirm/adt/hashset.h", "a00030.html", null ],
      [ "libfirm/adt/hungarian.h", "a00031.html", null ],
      [ "libfirm/adt/list.h", null, null ],
      [ "libfirm/adt/obst.h", "a00033.html", null ],
      [ "libfirm/adt/obstack.h", null, null ],
      [ "libfirm/adt/pdeq.h", "a00035.html", null ],
      [ "libfirm/adt/plist.h", "a00036.html", null ],
      [ "libfirm/adt/pmap.h", "a00037.html", null ],
      [ "libfirm/adt/pqueue.h", "a00038.html", null ],
      [ "libfirm/adt/pset.h", "a00039.html", null ],
      [ "libfirm/adt/pset_new.h", "a00040.html", null ],
      [ "libfirm/adt/set.h", "a00041.html", null ],
      [ "libfirm/adt/unionfind.h", "a00042.html", null ],
      [ "libfirm/adt/xmalloc.h", "a00043.html", null ]
    ] ],
    [ "Globals", "globals.html", null ]
  ] ]
];

function createIndent(o,domNode,node,level)
{
  if (node.parentNode && node.parentNode.parentNode)
  {
    createIndent(o,domNode,node.parentNode,level+1);
  }
  var imgNode = document.createElement("img");
  if (level==0 && node.childrenData)
  {
    node.plus_img = imgNode;
    node.expandToggle = document.createElement("a");
    node.expandToggle.href = "javascript:void(0)";
    node.expandToggle.onclick = function() 
    {
      if (node.expanded) 
      {
        $(node.getChildrenUL()).slideUp("fast");
        if (node.isLast)
        {
          node.plus_img.src = node.relpath+"ftv2plastnode.png";
        }
        else
        {
          node.plus_img.src = node.relpath+"ftv2pnode.png";
        }
        node.expanded = false;
      } 
      else 
      {
        expandNode(o, node, false);
      }
    }
    node.expandToggle.appendChild(imgNode);
    domNode.appendChild(node.expandToggle);
  }
  else
  {
    domNode.appendChild(imgNode);
  }
  if (level==0)
  {
    if (node.isLast)
    {
      if (node.childrenData)
      {
        imgNode.src = node.relpath+"ftv2plastnode.png";
      }
      else
      {
        imgNode.src = node.relpath+"ftv2lastnode.png";
        domNode.appendChild(imgNode);
      }
    }
    else
    {
      if (node.childrenData)
      {
        imgNode.src = node.relpath+"ftv2pnode.png";
      }
      else
      {
        imgNode.src = node.relpath+"ftv2node.png";
        domNode.appendChild(imgNode);
      }
    }
  }
  else
  {
    if (node.isLast)
    {
      imgNode.src = node.relpath+"ftv2blank.png";
    }
    else
    {
      imgNode.src = node.relpath+"ftv2vertline.png";
    }
  }
  imgNode.border = "0";
}

function newNode(o, po, text, link, childrenData, lastNode)
{
  var node = new Object();
  node.children = Array();
  node.childrenData = childrenData;
  node.depth = po.depth + 1;
  node.relpath = po.relpath;
  node.isLast = lastNode;

  node.li = document.createElement("li");
  po.getChildrenUL().appendChild(node.li);
  node.parentNode = po;

  node.itemDiv = document.createElement("div");
  node.itemDiv.className = "item";

  node.labelSpan = document.createElement("span");
  node.labelSpan.className = "label";

  createIndent(o,node.itemDiv,node,0);
  node.itemDiv.appendChild(node.labelSpan);
  node.li.appendChild(node.itemDiv);

  var a = document.createElement("a");
  node.labelSpan.appendChild(a);
  node.label = document.createTextNode(text);
  a.appendChild(node.label);
  if (link) 
  {
    a.href = node.relpath+link;
  } 
  else 
  {
    if (childrenData != null) 
    {
      a.className = "nolink";
      a.href = "javascript:void(0)";
      a.onclick = node.expandToggle.onclick;
      node.expanded = false;
    }
  }

  node.childrenUL = null;
  node.getChildrenUL = function() 
  {
    if (!node.childrenUL) 
    {
      node.childrenUL = document.createElement("ul");
      node.childrenUL.className = "children_ul";
      node.childrenUL.style.display = "none";
      node.li.appendChild(node.childrenUL);
    }
    return node.childrenUL;
  };

  return node;
}

function showRoot()
{
  var headerHeight = $("#top").height();
  var footerHeight = $("#nav-path").height();
  var windowHeight = $(window).height() - headerHeight - footerHeight;
  navtree.scrollTo('#selected',0,{offset:-windowHeight/2});
}

function expandNode(o, node, imm)
{
  if (node.childrenData && !node.expanded) 
  {
    if (!node.childrenVisited) 
    {
      getNode(o, node);
    }
    if (imm)
    {
      $(node.getChildrenUL()).show();
    } 
    else 
    {
      $(node.getChildrenUL()).slideDown("fast",showRoot);
    }
    if (node.isLast)
    {
      node.plus_img.src = node.relpath+"ftv2mlastnode.png";
    }
    else
    {
      node.plus_img.src = node.relpath+"ftv2mnode.png";
    }
    node.expanded = true;
  }
}

function getNode(o, po)
{
  po.childrenVisited = true;
  var l = po.childrenData.length-1;
  for (var i in po.childrenData) 
  {
    var nodeData = po.childrenData[i];
    po.children[i] = newNode(o, po, nodeData[0], nodeData[1], nodeData[2],
        i==l);
  }
}

function findNavTreePage(url, data)
{
  var nodes = data;
  var result = null;
  for (var i in nodes) 
  {
    var d = nodes[i];
    if (d[1] == url) 
    {
      return new Array(i);
    }
    else if (d[2] != null) // array of children
    {
      result = findNavTreePage(url, d[2]);
      if (result != null) 
      {
        return (new Array(i).concat(result));
      }
    }
  }
  return null;
}

function initNavTree(toroot,relpath)
{
  var o = new Object();
  o.toroot = toroot;
  o.node = new Object();
  o.node.li = document.getElementById("nav-tree-contents");
  o.node.childrenData = NAVTREE;
  o.node.children = new Array();
  o.node.childrenUL = document.createElement("ul");
  o.node.getChildrenUL = function() { return o.node.childrenUL; };
  o.node.li.appendChild(o.node.childrenUL);
  o.node.depth = 0;
  o.node.relpath = relpath;

  getNode(o, o.node);

  o.breadcrumbs = findNavTreePage(toroot, NAVTREE);
  if (o.breadcrumbs == null)
  {
    o.breadcrumbs = findNavTreePage("index.html",NAVTREE);
  }
  if (o.breadcrumbs != null && o.breadcrumbs.length>0)
  {
    var p = o.node;
    for (var i in o.breadcrumbs) 
    {
      var j = o.breadcrumbs[i];
      p = p.children[j];
      expandNode(o,p,true);
    }
    p.itemDiv.className = p.itemDiv.className + " selected";
    p.itemDiv.id = "selected";
    $(window).load(showRoot);
  }
}

