/*!
 * ExpressionEngine - by EllisLab
 *
 * @package		ExpressionEngine
 * @author		EllisLab Dev Team
 * @copyright	Copyright (c) 2003 - 2016, EllisLab, Inc.
 * @license		https://expressionengine.com/license
 * @link		https://ellislab.com
 * @since		Version 3.0
 * @filesource
 */

$(document).ready(function () {
	var newRouteCount = 0;

	$('.tbl-action a.btn').click(function (e) {
		e.preventDefault();

		var blankRoute = $(this).closest('table').find('tr.last').eq(0);
		var newRoute = blankRoute.clone();
		newRouteCount++;

		newRoute.removeClass('hidden');
		newRoute.removeClass('last');

		newRoute.html(
			newRoute.html().replace(
				RegExp('new_route_[0-9]{1,}', 'g'),
				'new_route_' + newRouteCount
			)
		);

		blankRoute.before(newRoute);
	})

	$('table').on('change', 'select', function (e) {
		var group = $('option:selected', this).closest('optgroup').attr('label');
		$(this).closest('td').next().html(group);

		$('option:disabled').removeAttr('disabled');

		$('option:selected').each(function (index, element) {
			if (element.value) {
				$('option[value=' + element.value + ']:not(:selected)').attr('disabled', 'disabled');
			}
		});
	});
});