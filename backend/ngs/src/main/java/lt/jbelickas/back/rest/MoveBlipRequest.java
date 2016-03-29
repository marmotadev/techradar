package lt.jbelickas.back.rest;

import lt.jbelickas.back.domain.Level;

public class MoveBlipRequest {

	private Long blipId;
	private Level level;
	private Long moveAboveThisId;

	public Long getBlipId() {
		return blipId;
	}

	public void setBlipId(Long blipId) {
		this.blipId = blipId;
	}

	public Level getLevel() {
		return level;
	}

	public void setLevel(Level level) {
		this.level = level;
	}

	public Long getMoveAboveThisId() {
		return moveAboveThisId;
	}

	public void setMoveAboveThisId(Long moveAboveThisId) {
		this.moveAboveThisId = moveAboveThisId;
	}

	@Override
	public String toString() {
		return "MoveBlipRequest [blipId=" + blipId + ", level=" + level + ", moveAboveThisId=" + moveAboveThisId + "]";
	}

	
}
