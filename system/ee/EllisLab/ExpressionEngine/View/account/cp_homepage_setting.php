<div class="fields-select">
	<ul class="field-inputs field-nested">
		<li>
			<label class="<?php if ($member->cp_homepage == ''): ?>act<?php endif ?>">
				<input type="radio" name="cp_homepage" value=""<?php if ($member->cp_homepage == ''): ?> checked<?php endif ?>> <?=lang('member_group_default')?>
			</label>
		</li>
		<li>
			<label class="<?php if ($member->cp_homepage == 'overview'): ?>act<?php endif ?>">
				<input type="radio" name="cp_homepage" value="overview"<?php if ($member->cp_homepage == 'overview'): ?> checked<?php endif ?>> <?=lang('cp_overview')?>
			</label>
		</li>
		<li>
			<label class="<?php if ($member->cp_homepage == 'entries_edit'): ?>act<?php endif ?>">
				<input type="radio" name="cp_homepage" value="entries_edit"<?php if ($member->cp_homepage == 'entries_edit'): ?> checked<?php endif ?>> <?=lang('edit_listing')?><?php if (bool_config_item('multiple_sites_enabled')): ?> &mdash; <i><?=lang('applies_to_all_sites')?></i><?php endif ?>
			</label>
		</li>
		<li>
		<label class="<?php if ($member->cp_homepage == 'publish_form'): ?>act<?php endif ?>">
			<input type="radio" name="cp_homepage" value="publish_form"<?php if ($member->cp_homepage == 'publish_form'): ?> checked<?php endif ?>> <?=lang('publish_form')?>
			<?php if (bool_config_item('multiple_sites_enabled')): ?>
				&mdash; <i><?=lang('choose_channels_per_site')?></i>
			<?php else: ?>
				<?=form_dropdown('cp_homepage_channel['.ee()->config->item('site_id').']', $allowed_channels, $selected_channel)?>
			<?php endif ?>
		</label>
		<?php if (bool_config_item('multiple_sites_enabled')): ?>
			<ul>
				<?php foreach ($allowed_channels as $site_id => $channels): ?>
					<li>
						<label>
							<?=$sites[$site_id]?> &mdash;
							<?=form_dropdown('cp_homepage_channel['.$site_id.']', $channels, isset($member->cp_homepage_channel[$site_id]) ? $member->cp_homepage_channel[$site_id] : 0)?>
						</label>
					</li>
				<?php endforeach ?>
			</ul>
		<?php endif ?>
		</li>
		<li>
			<label class="<?php if ($member->cp_homepage == 'custom'): ?>act<?php endif ?>">
				<input type="radio" name="cp_homepage" value="custom"<?php if ($member->cp_homepage == 'custom'): ?> checked<?php endif ?>> <?=lang('custom_uri')?>
			</label>
		</li>
	</ul>
</div>

<div class="add-mrg-top">
	<input type="text" name="cp_homepage_custom" value="<?=$member->cp_homepage_custom?>">
</div>
